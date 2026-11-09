'use client';

import { useState, type FormEvent } from 'react';

/**
 * Contact form UI.
 *
 * There is no form backend yet, so submit builds a pre-filled email to
 * hello@kmwebdesign.xyz and hands it to the visitor's mail client. Replace
 * `handleSubmit` with a POST to an API route, form service, or CRM when a
 * backend is available.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const project = String(data.get('project') || 'Restaurant website');
    const subject = `Project inquiry — ${project}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Project: ${project}`,
      `Budget: ${data.get('budget') || 'Not specified'}`,
      '',
      String(data.get('message') || ''),
    ].join('\n');

    window.location.href = `mailto:hello@kmwebdesign.xyz?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
        {sent && (
          <div className="p-4 border border-brand/40 bg-brand/10 km-text-strong text-sm font-medium">
            Your email app should open with these details filled in — send it and we&apos;ll reply
            within one business day. If nothing opened, email{' '}
            <a className="font-bold text-brand underline" href="mailto:hello@kmwebdesign.xyz">
              hello@kmwebdesign.xyz
            </a>
            .
          </div>
        )}
        <button type="submit" className="km-button km-button-primary w-full">
          Send Message <span aria-hidden>→</span>
        </button>
      </form>
    </div>
  );
}
