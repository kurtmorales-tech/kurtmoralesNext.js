import { ContactCta } from '@/components/sections/ContactCta';
import { Footprint } from '@/components/sections/Footprint';
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { Packages } from '@/components/sections/Packages';
import { PortfolioLab } from '@/components/sections/PortfolioLab';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { RestaurantConcepts } from '@/components/sections/RestaurantConcepts';
import { Reviews } from '@/components/sections/Reviews';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { Templates } from '@/components/sections/Templates';
import { projects, templates } from '@/lib/data';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <RestaurantConcepts />
      <PortfolioLab />
      <Metrics />
      <Services />
      <Process />
      <Reviews />
      <Projects items={projects} />
      <Packages />
      <Templates items={templates.slice(0, 3)} />
      <Skills />
      <Footprint />
      <ContactCta />
    </main>
  );
}
