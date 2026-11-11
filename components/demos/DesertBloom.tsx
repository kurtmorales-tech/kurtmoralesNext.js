import type { CSSProperties } from 'react';
import type { Concept } from '@/lib/data';
import { photosFor } from '@/lib/demo-photos';
import { DemoBar, DemoCredit } from './DemoBar';
import { DemoGallery } from './DemoGallery';

/**
 * Desert Bloom Coffee — neighbourhood café direction.
 *
 * Light, warm and quiet. The opposite of the fine-dining direction on
 * purpose: same craft, different room.
 */
export function DesertBloom({ concept }: { concept: Concept }) {
  const d = concept.demo;
  const [bg, accent, ink] = d.palette;
  const photos = photosFor(d.slug);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--db-bg)] text-[var(--db-ink)] antialiased"
      style={
        {
          '--db-bg': bg,
          '--db-accent': accent,
          '--db-ink': ink,
          '--db-line': 'rgba(47, 42, 36, 0.16)',
          '--db-soft': 'rgba(47, 42, 36, 0.8)',
          '--db-accent-ink': '#5c6a42',
          '--db-accent-deep': '#454f30',
        } as CSSProperties
      }
    >
      <DemoBar slug={d.slug} title={concept.title} />

      <header className="sticky top-0 z-40 border-b border-[var(--db-line)] bg-[var(--db-bg)]/94 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight">desert bloom</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--db-soft)]">
              coffee
            </span>
          </a>
          <nav aria-label="Desert Bloom Coffee" className="hidden items-center gap-7 sm:flex">
            {[
              ['Menu', '#menu'],
              ['The bar', '#bar'],
              ['Visit', '#visit'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[11px] uppercase tracking-[0.16em] text-[var(--db-soft)] transition-colors hover:text-[var(--db-ink)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#menu"
            className="rounded-full bg-[var(--db-ink)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--db-bg)] transition-opacity hover:opacity-85"
          >
            {d.hero.primaryCta}
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div
          className={`grid items-center gap-14 ${
            photos.length === 0 ? 'md:grid-cols-[1.15fr_0.85fr]' : ''
          }`}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--db-accent-ink)]">
              {d.hero.kicker}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.8rem)] leading-[0.96] tracking-[-0.02em]">
              {d.hero.title}
              <br />
              <em className="text-[var(--db-accent-ink)]">{d.hero.emphasis}</em>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[var(--db-soft)]">{d.hero.text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-[var(--db-ink)] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--db-bg)] transition-opacity hover:opacity-85"
              >
                {d.hero.primaryCta}
              </a>
              <a
                href="#menu"
                className="border-b border-[var(--db-ink)]/40 pb-1 text-[10px] uppercase tracking-[0.16em] text-[var(--db-soft)] transition-colors hover:border-[var(--db-ink)] hover:text-[var(--db-ink)]"
              >
                {d.hero.secondaryCta}
              </a>
            </div>
          </div>

          {photos.length === 0 && (
            <div className="relative mx-auto aspect-square w-full max-w-[19rem]">
              <div aria-hidden className="absolute inset-0 rounded-full border border-[var(--db-line)]" />
              <div aria-hidden className="absolute inset-[12%] rounded-full border border-[var(--db-line)]" />
              <div aria-hidden className="absolute inset-[24%] rounded-full bg-[var(--db-accent)]/20" />
              <div aria-hidden className="absolute inset-[38%] rounded-full bg-[var(--db-accent)]/45" />
              <div className="absolute inset-0 grid place-items-center px-10 text-center">
                <p className="font-display text-xl leading-tight">
                  Morning
                  <br />
                  light,
                  <br />
                  all year
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <DemoGallery photos={photos} containerClassName="max-w-5xl" />

      <section id="bar" className="border-y border-[var(--db-line)] bg-white/40">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-[0.32fr_1fr] md:py-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--db-accent-ink)]">
            {d.story.kicker}
          </p>
          <div>
            <h2 className="max-w-xl font-display text-2xl leading-snug md:text-3xl">
              {d.story.title}
            </h2>
            <div className="mt-6 grid gap-5 text-[15px] leading-7 text-[var(--db-soft)] md:grid-cols-2">
              {d.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--db-line)] pb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--db-accent-ink)]">
              {d.menu.kicker}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,3.8vw,2.8rem)] leading-tight">
              {d.menu.title}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[var(--db-soft)]">{d.menu.note}</p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {d.menu.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--db-soft)]">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="border-b border-[var(--db-line)] pb-3 last:border-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] leading-snug">{item.name}</span>
                      <span className="shrink-0 font-mono text-[11px] text-[var(--db-soft)]">
                        {item.price}
                      </span>
                    </div>
                    {item.note && (
                      <p className="mt-0.5 text-xs leading-5 text-[var(--db-soft)]">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--db-accent-deep)] text-[var(--db-bg)]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--db-bg)]/75">
              The patio
            </p>
            <h2 className="mt-3 font-display text-2xl leading-snug md:text-3xl">
              Shade, water, and somewhere to sit down.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[var(--db-bg)]/85">
            Six tables outside, misters in the summer, blankets in the winter. Dogs are welcome
            and the water bowl is always full.
          </p>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--db-accent-ink)]">
              {d.visit.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight">{d.visit.title}</h2>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em]">
              {d.visit.location}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--db-soft)]">{d.visit.note}</p>
          </div>
          <div className="rounded-xl border border-[var(--db-line)] bg-white/50 p-6 md:p-8">
            <dl className="divide-y divide-[var(--db-line)]">
              {d.visit.hours.map((row) => (
                <div key={row.days} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm">{row.days}</dt>
                  <dd className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--db-soft)]">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="#menu"
              className="mt-6 block rounded-full bg-[var(--db-ink)] px-6 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--db-bg)] transition-opacity hover:opacity-85"
            >
              {d.close.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--db-ink)] text-[var(--db-bg)]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight">
            {d.close.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--db-bg)]/65">
            {d.close.text}
          </p>
          <a
            href="#menu"
            className="mt-8 inline-block rounded-full bg-[var(--db-bg)] px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--db-ink)] transition-opacity hover:opacity-90"
          >
            {d.close.cta}
          </a>
        </div>
      </section>

      <DemoCredit />
    </main>
  );
}
