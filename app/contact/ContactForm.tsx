'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Contact form. POSTs to the Worker at /api/contact, which validates the
 * fields and emails the lead to the studio inbox. If the request fails the
 * visitor gets a mailto fallback so the enquiry is never lost.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          project: data.get('project'),
          budget: data.get('budget'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputClass =
    'w-full border km-border-strong px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors bg-[var(--km-surface)] km-text-strong';
  const labelClass =
    'block text-[9px] font-black uppercase tracking-widest km-text-muted mb-2';

  return (
    <div className="relative min-w-0 max-w-full km-panel p-6 sm:p-10">
      <div className="absolute top-0 left-0 w-12 h-[2px] bg-brand" />
      <div className="absolute top-0 left-0 w-[2px] h-12 bg-brand" />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <label>
            <span className={labelClass}>Name *</span>
            <input type="text" name="name" required className={inputClass} placeholder="Your name" />
          </label>
          <label>
            <span className={labelClass}>Email *</span>
            <input
              type="email"
              name="email"
              required
              className={inputClass}
              placeholder="your@email.com"
            />
          </label>
        </div>
        <label className="block">
          <span className={labelClass}>Project Type</span>
          <select name="project" className={inputClass} defaultValue="">
            <option value="">Select a service...</option>
            <option value="restaurant-website">Restaurant Website</option>
            <option value="menu-ordering">Menu / Online Ordering</option>
            <option value="local-seo">Local SEO / Performance</option>
            <option value="custom-tool">Custom Dashboard / Tool</option>
            <option value="other">Other / Not sure</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Budget Range</span>
          <select name="budget" className={inputClass} defaultValue="">
            <option value="">Select a range...</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-3k">$1,000 – $3,000</option>
            <option value="3k-7k">$3,000 – $7,000</option>
            <option value="7k-plus">$7,000+</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Message *</span>
          <textarea
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
            placeholder="Describe your project, goals, and timeline..."
          />
        </label>

        <div aria-live="polite">
          {status === 'sent' && (
            <div className="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">
              Thanks — your message is in. We&apos;ll reply within one business day.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">
              {error} You can also email{' '}
              <a className="font-bold text-brand underline" href="mailto:hello@kmwebdesign.xyz">
                hello@kmwebdesign.xyz
              </a>
              .
            </div>
          )}
        </div>

        <button
          type="submit"
          className="km-button km-button-primary w-full disabled:cursor-wait disabled:opacity-70"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}{' '}
          <span aria-hidden>→</span>
        </button>
      </form>
    </div>
  );
}
