import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SiteAssistant } from '@/components/SiteAssistant';

/**
 * Chrome for the marketing site. Demo sites under /demos/[slug] deliberately
 * sit outside this group: they have to look like their own restaurant site,
 * not like a page of the studio site with a header bolted on top.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SiteAssistant />
    </>
  );
}
