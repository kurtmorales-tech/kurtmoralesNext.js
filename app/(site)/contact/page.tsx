import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Tell KM Web Design about your restaurant, current website, and goals. Custom restaurant websites in Las Vegas, starting at $299.',
  path: '/contact',
});

const contactItems = [
  { label: 'Email', value: 'hello@kmwebdesign.xyz', href: 'mailto:hello@kmwebdesign.xyz' },
  {
    label: 'LinkedIn',
    value: 'kurtanthonymorales',
    href: 'https://www.linkedin.com/in/kurtanthonymorales/',
  },
  { label: 'GitHub', value: 'kurtmorales-tech', href: 'https://github.com/kurtmorales-tech' },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-24 border-b km-border-soft overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-20 items-start">
          <div>
            <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6 reveal">
              Contact
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand mb-8 reveal"
              style={{ animationDelay: '100ms' }}
            >
              Let&apos;s build something great.
            </h1>
            <p className="km-text-muted leading-relaxed mb-12 reveal" style={{ animationDelay: '200ms' }}>
              Tell us about your restaurant, your current website, and the guest action you want
              to improve. We&apos;ll get back to you within one business day.
            </p>
            <p
              className="mb-12 rounded-sm border km-border-soft p-4 text-sm km-text-muted reveal"
              style={{ animationDelay: '250ms' }}
            >
              Prefer to talk it through?{' '}
              <Link href="/book" className="font-semibold text-brand underline">
                Book a 15-minute discovery call
              </Link>
              .
            </p>
            <ul className="space-y-6 reveal" style={{ animationDelay: '300ms' }}>
              {contactItems.map((item) => (
                <li key={item.label} className="group flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-widest km-text-soft w-16 shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-sm font-bold km-text-strong group-hover:text-brand transition-colors link-underline"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-right min-w-0 max-w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
