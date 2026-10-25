'use client';

import { useEffect } from 'react';

/**
 * Activates the CSS scroll-reveal animations: any element carrying a
 * .reveal / .reveal-left / .reveal-right class gets .revealed added
 * when it scrolls into view (same behaviour as the original Layout).
 * Rendered once in the root layout; renders nothing itself.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right'),
    );
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
