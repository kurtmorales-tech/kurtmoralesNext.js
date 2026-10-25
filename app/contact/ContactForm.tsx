'use client';

import { useState, type FormEvent } from 'react';

/**
 * Contact form UI. There is no backend in this build, so submit does
 * not send anything — it offers a pre-filled mailto: fallback to
 * hello@kmwebdesign.xyz instead. Wire `handleSubmit` to an API route,
 * form service, or CRM endpoint to make it live.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            Thanks — this preview form isn&apos;t connected to a backend yet. Please email{' '}
            <a className="font-bold text-brand underline" href="mailto:hello@kmwebdesign.xyz">
              hello@kmwebdesign.xyz
            </a>{' '}
            and we&apos;ll get back to you within one business day.
          </div>
        )}
        <button type="submit" className="km-button km-button-primary w-full">
          Send Message <span aria-hidden>→</span>
        </button>
      </form>
    </div>
  );
}
