import Image from 'next/image';
import Link from 'next/link';
import { concepts } from '@/lib/data';

export function RestaurantConcepts() {
  return (
    <section id="restaurant-concepts" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,129,32,0.12),transparent_32rem)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="reveal-left">
            <span className="km-pill mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
              Restaurant concept lab
            </span>
            <h2 className="max-w-3xl text-4xl font-display font-medium leading-[0.95] km-text-strong md:text-6xl">
              See the experience <span className="text-brand">before we build it.</span>
            </h2>
          </div>
          <div className="reveal lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 km-text-muted">
              We create polished concept directions to make the vision tangible early—then turn
              the strongest direction into a fast, usable restaurant website.
            </p>
            <p className="mt-4 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-brand">
              Concept first. Proof next. Profit follows.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {concepts.map((concept, index) => (
            <article
              key={concept.title}
              className={`group reveal km-panel live-card overflow-hidden ${
                index === 0 ? 'lg:col-span-12' : 'lg:col-span-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}
              >
                <Image
                  src={concept.image}
                  alt={concept.alt}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${concept.accent} via-transparent to-transparent opacity-70`}
                />
                <span className="absolute left-5 top-5 border border-white/25 bg-black/35 px-3 py-2 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Self-initiated concept
                </span>
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-[0.8fr_1.2fr] md:items-start md:p-8">
                <div>
                  <p className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-brand">
                    {concept.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-display font-medium km-text-strong">
                    {concept.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 km-text-muted">{concept.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t km-border-soft pt-6">
          <p className="text-xs km-text-soft">
            These are fictional portfolio concepts, not commissioned client projects.
          </p>
          <Link href="/contact" className="km-button km-button-primary">
            Create your restaurant concept
          </Link>
        </div>
      </div>
    </section>
  );
}
