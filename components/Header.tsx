'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'kmwebdesign-theme';

type NavItem = { href: string; label: string; icon?: string; description?: string };

const primaryNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3V10.5Z' },
  { href: '/#services', label: 'Services', icon: 'M4 6h16M4 12h10M4 18h16' },
  { href: '/projects', label: 'Projects', icon: 'M4 5h16v14H4V5Zm3 4h10M7 13h6' },
  { href: '/blog', label: 'Blog', icon: 'M6 4h12v16H6V4Zm3 4h6M9 12h6M9 16h4' },
];

// In the original these pointed at Products / Templates / Resources /
// About / Studio pages. This clean build ships five routes, so the
// More menu points at the matching homepage sections instead.
const moreNavItems: NavItem[] = [
  { href: '/#templates', label: 'Templates', description: 'Starter kits and reusable builds' },
  { href: '/#packages', label: 'Packages', description: 'Flexible starting points for growing businesses' },
  { href: '/#process', label: 'Process', description: 'A simple path from idea to launch' },
  { href: '/#reviews', label: 'Client Proof', description: 'Outcomes and working experience' },
];

function NavIcon({ d, className = 'h-3.5 w-3.5' }: { d: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const menuWrapRef = useRef<HTMLDivElement>(null);

  // Restore the saved theme (or system preference) after mount.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Hide on scroll down, show on scroll up (original behaviour).
  useEffect(() => {
    let timer: number | undefined;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y < 120 || moreOpen || mobileOpen) {
        window.clearTimeout(timer);
        setHidden(false);
      } else if (y > lastY.current + 6) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => setHidden(true), 90);
      } else if (y < lastY.current - 6) {
        window.clearTimeout(timer);
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mobileOpen, moreOpen]);

  useEffect(() => {
    if (!moreOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuWrapRef.current && !menuWrapRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [moreOpen]);

  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const linkClass = (href: string) => {
    const active =
      href === '/' ? pathname === '/' : !href.includes('#') && pathname.startsWith(href);
    return `group/link flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
      active
        ? 'text-brand bg-[var(--km-surface-muted)]'
        : 'km-text-muted hover:text-brand hover:bg-[var(--km-surface-muted)]'
    }`;
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 km-glass transition-all duration-300 ${
          hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        } ${scrolled ? 'shadow-sm' : ''}`}
      >
        <nav
          className={`max-w-6xl mx-auto px-6 grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 transition-all duration-300 relative ${
            scrolled ? 'h-16' : 'h-20'
          }`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-self-start gap-3 text-xl font-bold tracking-tight km-text-strong transition-colors duration-300 hover:text-brand shrink-0"
            aria-label="KM Web Design home"
          >
            <span className="inline-flex h-3 w-3 rounded-full bg-brand/80 shadow-[0_0_0_6px_rgba(244,129,32,0.12)]" />
            KM
            <span className="text-brand transition-colors duration-300 group-hover:text-brand-dark">
              Web Design
            </span>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-2 justify-self-center">
            <div className="flex items-center gap-1">
              {primaryNavItems.map((item) =>
                item.href.includes('#') ? (
                  <a key={item.href} href={item.href} className={linkClass(item.href)}>
                    {item.icon && <NavIcon d={item.icon} className="h-3.5 w-3.5 shrink-0 opacity-70" />}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                    {item.icon && <NavIcon d={item.icon} className="h-3.5 w-3.5 shrink-0 opacity-70" />}
                    <span>{item.label}</span>
                  </Link>
                ),
              )}
            </div>

            <span className="mx-1 h-6 w-px bg-[var(--km-border)]" aria-hidden />

            <div className="flex items-center gap-2">
              <div className="relative" ref={menuWrapRef}>
                <button
                  type="button"
                  className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-md px-4 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    moreOpen
                      ? 'bg-[var(--km-surface-muted)] text-brand'
                      : 'km-glass km-text-strong hover:text-brand'
                  }`}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More
                  <span className="text-[10px] opacity-70" aria-hidden>
                    {moreOpen ? '▴' : '▾'}
                  </span>
                </button>
                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 w-72 pt-3">
                    <div className="km-panel rounded-lg p-3 shadow-xl" role="menu">
                      <p className="px-3 pb-1 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-brand">
                        Explore
                      </p>
                      {moreNavItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className="group/link flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] km-text-muted transition-colors hover:text-brand hover:bg-[var(--km-surface-muted)]"
                        >
                          <span className="block min-w-0">
                            <span className="block">{item.label}</span>
                            {item.description ? (
                              <span className="mt-0.5 block font-sans text-xs font-medium normal-case leading-snug tracking-normal km-text-muted">
                                {item.description}
                              </span>
                            ) : null}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="km-button km-button-primary inline-flex h-10 items-center border-0 px-5 py-0 text-[10px] [border-radius:0.5rem]"
              >
                Contact
              </Link>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md km-glass km-text-strong transition-all duration-300 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                type="button"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-pressed={theme === 'dark'}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 justify-self-end lg:hidden">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md km-glass km-text-strong transition-all duration-300 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md km-glass km-text-strong transition-all duration-300 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="absolute top-full left-4 right-4 rounded-lg p-4 lg:hidden km-panel shadow-xl max-h-[80vh] overflow-y-auto">
            <p className="px-3 pb-1 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-brand">
              Navigate
            </p>
            <div className="space-y-1">
              {primaryNavItems.map((item) =>
                item.href.includes('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-sm px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] km-text-muted hover:text-brand"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-sm px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] km-text-muted hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              {moreNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-sm px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] km-text-muted hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="km-button km-button-primary mt-4 w-full border-0 [border-radius:0.5rem]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
