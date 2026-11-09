import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SiteAssistant } from '@/components/SiteAssistant';
import { platforms, site } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.homeTitle,
    template: '%s | KM Web Design',
  },
  description: site.homeDescription,
  icons: { icon: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    locale: 'en_US',
    title: site.homeTitle,
    description: site.homeDescription,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'KM Web Design — restaurant websites for Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.homeTitle,
    description: site.homeDescription,
    images: ['/og-default.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#studio`,
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.homeDescription,
  priceRange: `$${site.startingPrice}+`,
  areaServed: {
    '@type': 'City',
    name: 'Las Vegas',
    containedInPlace: { '@type': 'State', name: 'Nevada' },
  },
  sameAs: platforms
    .filter((platform) => platform.name === 'LinkedIn' || platform.name === 'GitHub')
    .map((platform) => platform.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <SiteAssistant />
      </body>
    </html>
  );
}
