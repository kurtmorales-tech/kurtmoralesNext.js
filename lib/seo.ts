import type { Metadata } from 'next';

/**
 * Builds a consistent metadata object for a page: page title, description,
 * canonical URL, and matching Open Graph / Twitter cards.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string;
  description: string;
  path: `/${string}` | '/';
  ogTitle?: string;
}): Metadata {
  const socialTitle = ogTitle ?? `${title} | KM Web Design`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      images: ['/og-default.png'],
    },
    twitter: {
      title: socialTitle,
      description,
      images: ['/og-default.png'],
    },
  };
}
