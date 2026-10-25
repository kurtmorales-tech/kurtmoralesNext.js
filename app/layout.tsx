import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { SiteAssistant } from '@/components/SiteAssistant';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://kmwebdesign.xyz'),
  title: {
    default: site.homeTitle,
    template: '%s | KM Web Design',
  },
  description: site.homeDescription,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: site.homeTitle,
    description: site.homeDescription,
    images: ['/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <SiteAssistant />
        <Reveal />
      </body>
    </html>
  );
}
