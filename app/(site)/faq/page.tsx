import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { FAQ } from '@/components/sections/FAQ';
import { faqs } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers about pricing, timelines, hosting, accessibility, and ownership for KM Web Design restaurant websites.',
  path: '/faq',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <main id="main-content" className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQ heading={false} />
    </main>
  );
}
