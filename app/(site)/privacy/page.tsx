import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How KM Web Design collects, uses, and protects information submitted through kmwebdesign.xyz.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="km-pill mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand mb-8">
            Privacy policy
          </h1>
          <p className="km-text-muted leading-relaxed mb-10">
            Last updated: November 24, 2026. KM Web Design (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
            respects your privacy. This policy explains what we collect on{' '}
            <strong className="km-text-strong">{site.url}</strong> and how we use it.
          </p>

          <div className="space-y-8 text-sm leading-relaxed km-text-muted">
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">Information we collect</h2>
              <p>
                When you use the contact form we collect your name, email address, project type,
                budget range, and message. We also receive basic technical data (browser, IP
                address, country) provided by our hosting provider.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">How we use it</h2>
              <p>
                We use your information to respond to your inquiry, prepare a quote, and deliver
                the services you request. We do not sell, rent, or share your personal
                information with third parties for marketing.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">Cookies</h2>
              <p>
                We use strictly necessary cookies only: one to remember your light/dark theme
                preference and one to remember your cookie-consent choice. We do not use
                advertising or analytics cookies.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">Data retention</h2>
              <p>
                Inquiry records are retained for as long as needed to serve you and meet legal
                obligations, then deleted. You may request deletion at any time.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">Your rights (GDPR / CCPA)</h2>
              <p>
                You have the right to access, correct, or delete your personal data, and to
                withdraw consent. Email{' '}
                <a className="text-brand font-bold underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{' '}
                to exercise these rights.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">HIPAA notice</h2>
              <p>
                KM Web Design is not a healthcare provider and does not collect protected health
                information (PHI). Please do not submit medical information through this site.
                Client healthcare projects are handled under separate business associate
                agreements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold km-text-strong mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{' '}
                <a className="text-brand font-bold underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/" className="km-button km-button-secondary">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
