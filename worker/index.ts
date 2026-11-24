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

function html(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function isHtmx(request: Request): boolean {
  return request.headers.get('HX-Request') === 'true';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

    const contentType = request.headers.get('content-type') || '';
    let payload: Record<string, unknown> = {};
    try {
      if (contentType.includes('application/json')) {
        payload = (await request.json()) as Record<string, unknown>;
      } else {
        const form = await request.formData();
        payload = Object.fromEntries(form.entries()) as Record<string, unknown>;
      }
    } catch {
      if (isHtmx(request)) {
        return html('<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">Invalid request body.</p>', 400);
      }
      return json({ ok: false, error: 'Invalid request body.' }, 400);
    }

    const name = field(payload.name);
    const email = field(payload.email);
    const message = field(payload.message);
    const project = field(payload.project) || 'Not specified';
    const budget = field(payload.budget) || 'Not specified';

    // Honeypot: real visitors never fill this hidden field.
    if (field(payload.company)) {
      if (isHtmx(request)) return html('<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">Thanks — your message is in.</p>');
      return json({ ok: true });
    }

    if (!name || !email || !message) {
      const msg = 'Name, email, and message are required.';
      if (isHtmx(request)) return html(`<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">${escapeHtml(msg)}</p>`, 400);
      return json({ ok: false, error: msg }, 400);
    }

    if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
      const msg = 'That message is too long. Please shorten it.';
      if (isHtmx(request)) return html(`<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">${escapeHtml(msg)}</p>`, 400);
      return json({ ok: false, error: msg }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      const msg = 'Please enter a valid email address.';
      if (isHtmx(request)) return html(`<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">${escapeHtml(msg)}</p>`, 400);
      return json({ ok: false, error: msg }, 400);
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
      const msg = 'The message could not be sent. Please email hello@kmwebdesign.xyz instead.';
      if (isHtmx(request)) return html(`<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">${escapeHtml(msg)} You can also email <a class="font-bold text-brand underline" href="mailto:hello@kmwebdesign.xyz">hello@kmwebdesign.xyz</a>.</p>`, 502);
      return json({ ok: false, error: msg }, 502);
    }

    if (isHtmx(request)) {
      return html('<p class="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">Thanks — your message is in. We\u2019ll reply within one business day.</p>');
    }
    return json({ ok: true });
  },
};
