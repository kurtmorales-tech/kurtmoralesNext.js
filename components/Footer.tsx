import Link from 'next/link';
import { social } from '@/lib/data';

const navigation: Array<{ label: string; href: string }> = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Templates', href: '/#templates' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="km-glass py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-[1.35fr_1fr_1fr] items-start">
          <div className="km-panel live-card p-8 md:p-10">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight mb-6 inline-flex items-center gap-3 group km-text-strong"
            >
              <span className="inline-flex h-3 w-3 rounded-full bg-brand/80 shadow-[0_0_0_6px_rgba(244,129,32,0.12)]" />
              KM
              <span className="text-brand group-hover:text-brand-dark transition-colors duration-300">
                Web Design
              </span>
            </Link>
            <p className="text-sm km-text-muted max-w-sm leading-relaxed mb-8">
              Custom restaurant websites, practical digital tools, and launch support for owners
              who want a stronger online presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:hello@kmwebdesign.xyz" className="km-button km-button-secondary">
                Email
              </a>
              <Link href="/contact" className="km-button km-button-primary">
                Start project
              </Link>
            </div>
          </div>

          <div className="km-panel live-card p-8 md:p-10">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-soft block mb-6">
              $ navigation
            </span>
            <ul className="space-y-4 text-sm km-text-muted font-medium">
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.href.includes('#') ? (
                    <a
                      href={item.href}
                      className="link-underline hover:text-brand transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="link-underline hover:text-brand transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="km-panel live-card p-8 md:p-10">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-soft block mb-6">
              $ connect
            </span>
            <ul className="space-y-4 text-sm km-text-muted font-medium">
              <li>
                <a
                  href="mailto:hello@kmwebdesign.xyz"
                  className="link-underline hover:text-brand transition-colors duration-300"
                >
                  hello@kmwebdesign.xyz
                </a>
              </li>
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline hover:text-brand transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] km-text-soft">
            © {year} KurtMorales Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="km-pill km-text-muted hover:text-brand transition-colors duration-300"
                aria-label={item.label}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
