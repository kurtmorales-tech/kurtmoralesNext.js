'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Corner site-assistant card, bottom-right of every page.
 * The original opened a multi-step chat that submitted a lead to the
 * backend API. This clean build has no backend, so the panel links
 * straight to the contact page instead — same launcher look.
 */
export function SiteAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && (
        <section
          aria-label="KM project assistant"
          className="km-panel w-[min(22rem,calc(100vw-2.5rem))] p-6 shadow-[0_24px_60px_rgba(19,17,15,0.25)]"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center bg-brand text-xs font-black text-white">
                KM
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[var(--km-surface)] bg-emerald-500" />
              </span>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.16em] km-text-soft">
                  KM automated assistant
                </p>
                <p className="text-sm font-bold km-text-strong">Plan your project</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="km-text-muted transition-colors hover:text-brand"
            >
              ✕
            </button>
          </div>
          <p className="text-sm leading-relaxed km-text-muted">
            Tell us about your restaurant, your current website, and the guest action you want to
            improve. We&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="km-button km-button-primary mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Start a project brief
          </Link>
          <p className="mt-3 text-[11px] leading-4 km-text-muted">
            Prefer email? Reach us at hello@kmwebdesign.xyz.
          </p>
        </section>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 border border-brand/30 bg-[var(--km-surface)] px-4 py-3 shadow-[0_16px_44px_rgba(19,17,15,0.22)] transition hover:-translate-y-1 hover:border-brand"
          aria-label="Open KM automated project assistant"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center bg-brand text-xs font-black text-white">
            KM
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[var(--km-surface)] bg-emerald-500" />
          </span>
          <span className="text-left">
            <span className="block text-[9px] font-black uppercase tracking-[0.16em] km-text-soft">
              Need a restaurant site?
            </span>
            <span className="mt-1 block text-sm font-bold km-text-strong group-hover:text-brand">
              Plan your project
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
