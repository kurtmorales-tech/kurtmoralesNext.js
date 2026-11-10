import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DesertBloom } from '@/components/demos/DesertBloom';
import { EmberVine } from '@/components/demos/EmberVine';
import { SolYSabor } from '@/components/demos/SolYSabor';
import { concepts } from '@/lib/data';

/**
 * Live demo restaurant sites. These sit outside the (site) route group on
 * purpose: no studio header, no floating assistant, no marketing chrome —
 * just the restaurant site, with a thin demo bar on top.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return concepts.map((concept) => ({ slug: concept.demo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.demo.slug === slug);

  if (!concept) return {};

  return {
    title: `${concept.title} — live demo`,
    description: `${concept.demo.tagline} A working demo restaurant site built by KM Web Design.`,
    alternates: { canonical: `/demos/${slug}` },
    // Demo restaurant pages are for clients to review, not for search results:
    // there is no real business behind the menus or the hours.
    robots: { index: false, follow: true },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = concepts.find((entry) => entry.demo.slug === slug);

  if (!concept) notFound();

  switch (slug) {
    case 'ember-vine':
      return <EmberVine concept={concept} />;
    case 'sol-sabor':
      return <SolYSabor concept={concept} />;
    case 'desert-bloom':
      return <DesertBloom concept={concept} />;
    default:
      notFound();
  }
}
