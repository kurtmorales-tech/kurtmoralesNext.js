import type { Metadata } from 'next';
import { Projects } from '@/components/sections/Projects';
import { RestaurantConcepts } from '@/components/sections/RestaurantConcepts';
import { Templates } from '@/components/sections/Templates';
import { projects, templates } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Restaurant Website Projects',
  description:
    'Selected restaurant websites, design concepts, and digital projects from KM Web Design in Las Vegas.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-24">
      <section className="pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <span className="km-pill mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
            <span className="h-2 w-2 bg-brand" />
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-[0.95] km-text-strong max-w-3xl">
            Websites built to be <span className="text-brand">found and booked.</span>
          </h1>
          <p className="mt-6 km-text-muted text-lg leading-relaxed max-w-2xl">
            Live client work, restaurant design concepts, and ready-to-use templates from KM Web
            Design in Las Vegas.
          </p>
        </div>
      </section>
      <RestaurantConcepts />
      <Projects items={projects} />
      <Templates items={templates} />
    </main>
  );
}
