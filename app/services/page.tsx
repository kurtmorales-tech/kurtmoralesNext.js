import type { Metadata } from 'next';
import Link from 'next/link';
import { Packages } from '@/components/sections/Packages';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Restaurant websites, menus & integrations, and local growth services from KM Web Design in Las Vegas.',
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <span className="km-pill mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
            <span className="w-2 h-2 bg-green-500 pulse-dot" />
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-[0.95] km-text-strong max-w-3xl">
            Everything your restaurant needs <span className="text-brand">to win online.</span>
          </h1>
          <p className="mt-6 km-text-muted text-lg leading-relaxed max-w-2xl">
            Custom, mobile-first websites that put your food, atmosphere, location, and next action
            front and center — plus the menus, integrations, and local growth work that turn
            visitors into guests.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="km-button km-button-primary">
              Book a discovery call
            </Link>
            <Link href="/projects" className="km-button km-button-secondary">
              See the work
            </Link>
          </div>
        </div>
      </section>
      <Services />
      <Process />
      <Packages />
    </main>
  );
}
