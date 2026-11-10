/**
 * Contact-form endpoint for the static site.
 *
 * The Worker only handles /api/* requests; every other path is served
 * straight from the static assets in ./out. Leads are emailed to the
 * verified destination configured on the EMAIL binding in wrangler.jsonc.
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

interface Env {
  EMAIL: EmailBinding;
  ASSETS: { fetch(request: Request): Promise<Response> };
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

    const text = [
      'New project inquiry from kmwebdesign.xyz',
      '',
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Project: ${project}`,
      `Budget:  ${budget}`,
      '',
      'Message:',
      message,
    ].join('\n');

    try {
      await env.EMAIL.send({
        from: { email: 'website@kmwebdesign.xyz', name: 'KM Web Design website' },
        to: 'kurtmorales733@gmail.com',
        replyTo: { email, name },
        subject: `New project inquiry — ${name}`,
        text,
      });
    } catch (error) {
      console.error('Contact form send failed', error);
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
