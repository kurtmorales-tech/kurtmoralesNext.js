import Link from 'next/link';
import { social } from '@/lib/data';
import { IconVerified, IconShield, IconMail } from '@/components/icons/Icon';

const columns: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }> = [
  {
    title: 'Studio',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/#services' },
      { label: 'Process', href: '/#process' },
      { label: 'Packages', href: '/#packages' },
      { label: 'Reviews', href: '/#reviews' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a call', href: '/book' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Restaurant concepts', href: '/projects#restaurant-concepts' },
      { label: 'Live demos', href: '/demos' },
      { label: 'Templates', href: '/#templates' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Sitemap', href: '/sitemap.xml' },
      { label: 'Robots', href: '/robots.txt' },
      { label: 'Contact form', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@kmwebdesign.xyz', href: 'mailto:hello@kmwebdesign.xyz' },
      ...social.map((s) => ({ label: s.label, href: s.href, external: true })),
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="km-glass pt-20 pb-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand + verified badge */}
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-start mb-14">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-flex items-center gap-3 group km-text-strong mb-4"
            >
              <span className="inline-flex h-3 w-3 rounded-full bg-brand/80 shadow-[0_0_0_6px_rgba(244,129,32,0.12)]" />
              KM
              <span className="text-brand group-hover:text-brand-dark transition-colors duration-300">
                Web Design
              </span>
            </Link>
            <p className="text-sm km-text-muted max-w-md leading-relaxed mb-6">
              Custom restaurant websites, practical digital tools, and launch support for owners
              who want a stronger online presence. Las Vegas based, serving clients worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:hello@kmwebdesign.xyz" className="km-button km-button-secondary">
                <IconMail className="h-4 w-4" /> Email
              </a>
              <Link href="/contact" className="km-button km-button-primary">
                Start project
              </Link>
            </div>
          </div>
          <div className="km-panel p-6">
            <div className="flex items-center gap-2 mb-3">
              <IconVerified className="h-5 w-5 text-brand" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-strong">
                Verified work
              </span>
            </div>
            <p className="text-xs km-text-muted leading-relaxed">
              Every project, concept, and template shown on this site is original work by KM Web
              Design. Client names and brands remain the property of their owners and are shown
              with consent. No fabricated traffic, revenue, or testimonial figures are used.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <IconShield className="h-4 w-4 text-brand" />
              <span className="text-[10px] font-mono uppercase tracking-widest km-text-soft">
                GDPR ready · WCAG 2.1 AA · HIPAA-aware
              </span>
            </div>
          </div>
        </div>

        {/* Mega link grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-t km-border-soft pt-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.18em] km-text-strong mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="km-text-muted hover:text-brand transition-colors duration-300 link-underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="km-text-muted hover:text-brand transition-colors duration-300 link-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t km-border-soft flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] km-text-soft">
            © {year} KM Web Design (KurtMorales Studio). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
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

        <p className="mt-6 text-center text-[10px] km-text-soft">
          Backlinks: <Link href="/" className="hover:text-brand">Home</Link> ·{' '}
          <Link href="/services" className="hover:text-brand">Services</Link> ·{' '}
          <Link href="/projects" className="hover:text-brand">Projects</Link> ·{' '}
          <Link href="/demos" className="hover:text-brand">Demos</Link> ·{' '}
          <Link href="/book" className="hover:text-brand">Book</Link> ·{' '}
          <Link href="/contact" className="hover:text-brand">Contact</Link> ·{' '}
          <Link href="/blog" className="hover:text-brand">Blog</Link> ·{' '}
          <Link href="/faq" className="hover:text-brand">FAQ</Link> ·{' '}
          <Link href="/privacy" className="hover:text-brand">Privacy</Link>
        </p>
      </div>
    </footer>
  );
}
