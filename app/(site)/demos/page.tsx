import type { Metadata } from 'next';
import Link from 'next/link';
import { concepts } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Live restaurant website demos',
  description:
    'Three working restaurant website directions you can open, scroll and compare — fine dining, modern Mexican, and a neighbourhood coffee bar. Pick the one that fits, then we build yours.',
  path: '/demos',
});

/**
 * The raw accent works on the dark plate but not as small type on cream, so
 * each direction gets a text-safe variant for labels and rules.
 */
function plateAccent(slug: string, accent: string) {
  if (slug === 'sol-sabor') return '#a8401c';
  if (slug === 'desert-bloom') return '#5c6a42';
  return accent;
}

function plateTitleClass(slug: string) {
  return slug === 'sol-sabor'
    ? 'text-4xl font-black uppercase leading-[0.86] tracking-[-0.03em] md:text-5xl'
    : 'font-display text-4xl leading-[0.98] md:text-6xl';
}

export default function DemosPage() {
  return (
    <main id="main-content">
      <section className="overflow-x-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="km-pill reveal mb-6 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
            Live demos
          </span>
          <h1
            className="reveal max-w-4xl text-4xl font-display font-medium leading-[0.95] km-text-strong md:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Pick a direction. <span className="text-brand">See it live.</span>
          </h1>
          <p
            className="reveal mt-6 max-w-2xl text-lg leading-relaxed km-text-muted"
            style={{ animationDelay: '160ms' }}
          >
            These are not screenshots. Each card below opens a real, working restaurant site —
            scroll it, resize it, read the menu the way a guest would. Then tell us which direction
            feels like your room.
          </p>
          <p
            className="reveal mt-4 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-brand"
            style={{ animationDelay: '220ms' }}
          >
            Three kitchens. Three completely different answers.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {concepts.map((concept, index) => {
            const demo = concept.demo;
            const [bg, accent, ink] = demo.palette;
            const accentInk = plateAccent(demo.slug, accent);
            return (
              <article
                key={demo.slug}
                className="km-panel reveal overflow-hidden"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="grid lg:grid-cols-[1.05fr_1fr]">
                  <Link
                    href={`/demos/${demo.slug}`}
                    className={`group relative block ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <div
                      className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden p-7 md:p-9"
                      style={{ backgroundColor: bg, color: ink }}
                    >
                      <span
                        aria-hidden
                        className="absolute -right-16 -top-16 h-56 w-56 rounded-full border transition-transform duration-700 group-hover:scale-110"
                        style={{ borderColor: `${accentInk}66` }}
                      />
                      <span
                        aria-hidden
                        className="absolute -right-6 -top-6 h-28 w-28 rounded-full"
                        style={{ backgroundColor: `${accent}22` }}
                      />

                      <div className="relative flex items-start justify-between gap-4">
                        <span
                          className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: accentInk }}
                        >
                          {concept.category}
                        </span>
                        <span
                          className="rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em]"
                          style={{ borderColor: `${ink}33`, color: ink }}
                        >
                          Live site
                        </span>
                      </div>

                      <div className="relative">
                        <span
                          aria-hidden
                          className="mb-5 block h-px w-12"
                          style={{ backgroundColor: accentInk }}
                        />
                        <p className={plateTitleClass(demo.slug)}>{concept.title}</p>
                        <p className="mt-3 max-w-xs text-sm leading-6" style={{ opacity: 0.9 }}>
                          {demo.tagline}
                        </p>
                      </div>

                      <div className="relative flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2">
                          {demo.palette.map((color) => (
                            <span
                              key={color}
                              className="h-3 w-3 rounded-full border"
                              style={{ backgroundColor: color, borderColor: `${ink}33` }}
                            />
                          ))}
                        </span>
                        <span className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                          Open live demo{' '}
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col justify-center gap-6 p-6 md:p-10">
                    <div>
                      <p className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-brand">
                        {concept.category}
                      </p>
                      <h2 className="mt-2 text-3xl font-display font-medium km-text-strong md:text-4xl">
                        {concept.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 km-text-strong">{demo.tagline}</p>
                      <p className="mt-3 text-sm leading-6 km-text-muted">{concept.summary}</p>
                    </div>

                    <dl className="grid gap-4 border-t km-border-soft pt-5 sm:grid-cols-2">
                      <div>
                        <dt className="font-mono text-[9px] font-black uppercase tracking-[0.16em] km-text-muted">
                          Best for
                        </dt>
                        <dd className="mt-1.5 text-sm leading-6 km-text-strong">{demo.bestFor}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[9px] font-black uppercase tracking-[0.16em] km-text-muted">
                          Palette
                        </dt>
                        <dd className="mt-2 flex items-center gap-2">
                          {demo.palette.map((color) => (
                            <span
                              key={color}
                              className="h-5 w-5 rounded-full border km-border-soft"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </dd>
                      </div>
                    </dl>

                    <div className="flex flex-wrap gap-3">
                      <Link href={`/demos/${demo.slug}`} className="km-button km-button-primary">
                        Open the demo
                      </Link>
                      <Link
                        href={`/contact?style=${demo.slug}`}
                        className="km-button km-button-secondary"
                      >
                        Choose this direction
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="km-panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-display font-medium km-text-strong md:text-3xl">
                None of these feels right?
              </h2>
              <p className="mt-3 text-sm leading-6 km-text-muted">
                Good — that is what the first conversation is for. Tell us about your room, your
                menu and your guests, and we will design a direction around it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book" className="km-button km-button-primary">
                Book a 15-minute call
              </Link>
              <Link href="/contact" className="km-button km-button-secondary">
                Start from scratch
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs leading-5 km-text-soft">
            Menus, hours and locations inside the demos are sample content. The design, code and
            performance are the real thing.
          </p>
        </div>
      </section>
    </main>
  );
}
