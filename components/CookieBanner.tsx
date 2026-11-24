'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconCookie, IconClose } from '@/components/icons/Icon';

const STORAGE_KEY = 'kmwebdesign-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl km-panel p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <IconCookie className="h-5 w-5 mt-0.5 text-brand" />
            <div className="text-sm km-text-muted leading-relaxed">
              <p className="font-semibold km-text-strong mb-1">We use essential cookies only.</p>
              <p>
                KM Web Design uses strictly necessary cookies to remember your theme and consent
                choice. We do not run third-party trackers or advertising cookies. Read our{' '}
                <Link href="/privacy" className="font-bold text-brand underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={decline}
              className="km-button km-button-secondary text-[10px] px-4 py-2"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="km-button km-button-primary text-[10px] px-4 py-2"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={decline}
              aria-label="Close cookie banner"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md km-glass km-text-muted hover:text-brand"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
