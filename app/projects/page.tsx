import type { Metadata } from 'next';
import { Projects } from '@/components/sections/Projects';
import { RestaurantConcepts } from '@/components/sections/RestaurantConcepts';
import { Templates } from '@/components/sections/Templates';
import { projects, templates } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Restaurant Website Projects',
  description:
    'Selected restaurant-focused website concepts and digital projects from KM Web Design.',
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-24">
      <RestaurantConcepts />
      <Projects items={projects} />
      <Templates items={templates} />
    </main>
  );
}
