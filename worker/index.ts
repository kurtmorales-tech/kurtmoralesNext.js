/**
 * Contact-form endpoint for the static site.
 *
 * The Worker only handles /api/* requests; every other path is served
 * straight from the static assets in ./out.
 *
 * A lead is written to the LEADS KV namespace *before* the notification
 * email is attempted, so a mail failure can never lose an inquiry. The
 * email then records its own outcome back onto the stored lead.
 */

interface EmailAddress {
  email: string;
  name?: string;
}

interface EmailBinding {
  send(message: {
    from: string | EmailAddress;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string | EmailAddress;
  }): Promise<{ messageId: string }>;
}

interface KVBinding {
  put(key: string, value: string): Promise<void>;
  get(key: string): Promise<string | null>;
  list(options?: { prefix?: string; limit?: number }): Promise<{
    keys: { name: string }[];
    list_complete: boolean;
    cursor?: string;
  }>;
}

interface Env {
  EMAIL: EmailBinding;
  LEADS: KVBinding;
  ASSETS: { fetch(request: Request): Promise<Response> };
}

interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
  source: string;
  country: string | null;
  emailStatus: 'pending' | 'sent' | 'failed';
  emailError?: string;
}

const LIMITS = { name: 120, email: 200, message: 5000 };

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function field(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function leadKey(lead: LeadRecord): string {
  // ISO-8601 first so `list({ prefix: 'lead:' })` returns newest last
  // in lexicographic order without needing an index.
  return `lead:${lead.createdAt}:${lead.id}`;
}

/** Persists the lead. Returns false when the write fails. */
async function storeLead(env: Env, lead: LeadRecord): Promise<boolean> {
  try {
    await env.LEADS.put(leadKey(lead), JSON.stringify(lead));
    return true;
  } catch (error) {
    console.error(
      JSON.stringify({
        event: 'lead_store_failed',
        leadId: lead.id,
        error: error instanceof Error ? error.message : String(error),
      }),
    );
    return false;
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== '/api/contact') {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed.' }, 405);
    }

    let payload: Record<string, unknown>;
    try {
      payload = (await request.json()) as Record<string, unknown>;
    } catch {
      return json({ ok: false, error: 'Invalid request body.' }, 400);
    }

    const name = field(payload.name);
    const email = field(payload.email);
    const message = field(payload.message);
    const project = field(payload.project) || 'Not specified';
    const budget = field(payload.budget) || 'Not specified';

    // Honeypot: real visitors never fill this hidden field.
    if (field(payload.company)) {
      return json({ ok: true });
    }

    if (!name || !email || !message) {
      return json({ ok: false, error: 'Name, email, and message are required.' }, 400);
    }

    if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
      return json({ ok: false, error: 'That message is too long. Please shorten it.' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
    }

    const lead: LeadRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      project,
      budget,
      message,
      source: 'contact-form',
      country: (request as Request & { cf?: { country?: string } }).cf?.country ?? null,
      emailStatus: 'pending',
    };

    const stored = await storeLead(env, lead);

    const text = [
      'New project inquiry from kmwebdesign.xyz',
      '',
      `Lead ID: ${lead.id}`,
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Project: ${project}`,
      `Budget:  ${budget}`,
      '',
      'Message:',
      message,
    ].join('\n');

    let emailed = false;
    try {
      await env.EMAIL.send({
        from: { email: 'website@kmwebdesign.xyz', name: 'KM Web Design website' },
        to: 'kurtmorales733@gmail.com',
        replyTo: { email, name },
        subject: `New project inquiry — ${name}`,
        text,
      });
      emailed = true;
      lead.emailStatus = 'sent';
    } catch (error) {
      lead.emailStatus = 'failed';
      lead.emailError = error instanceof Error ? error.message : String(error);
      console.error(
        JSON.stringify({
          event: 'lead_email_failed',
          leadId: lead.id,
          stored,
          error: lead.emailError,
        }),
      );
    }

    // Record the notification outcome so a failed send stays visible in the
    // lead log instead of only in a transient console line.
    if (stored) {
      try {
        await env.LEADS.put(leadKey(lead), JSON.stringify(lead));
      } catch {
        // The lead itself is already durable; a failed status update is not
        // worth failing the request over.
      }
    }

    if (!stored && !emailed) {
      return json(
        {
          ok: false,
          error: 'The message could not be sent. Please email hello@kmwebdesign.xyz instead.',
        },
        502,
      );
    }

    return json({ ok: true });
  },
};
