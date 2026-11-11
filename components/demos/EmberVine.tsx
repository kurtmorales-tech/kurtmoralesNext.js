import type { CSSProperties } from 'react';
import type { Concept } from '@/lib/data';
import { photosFor } from '@/lib/demo-photos';
import { DemoBar, DemoCredit } from './DemoBar';
import { DemoGallery } from './DemoGallery';

/**
 * Ember & Vine — fine dining direction.
 *
 * Dark, editorial, reservation first. Everything is type, rule and colour;
 * there is no photography in the demo, which forces the layout to carry the
 * identity on its own.
 */
export function EmberVine({ concept }: { concept: Concept }) {
  const d = concept.demo;
  const [bg, accent, ink] = d.palette;
  const photos = photosFor(d.slug);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--ev-bg)] text-[var(--ev-ink)] antialiased"
      style={
        {
          '--ev-bg': bg,
          '--ev-accent': accent,
          '--ev-ink': ink,
          '--ev-muted': 'rgba(237, 228, 216, 0.58)',
          '--ev-line': 'rgba(237, 228, 216, 0.14)',
        } as CSSProperties
      }
    >
      <DemoBar slug={d.slug} title={concept.title} />

      <header className="sticky top-0 z-40 border-b border-[var(--ev-line)] bg-[var(--ev-bg)]/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="font-display text-xl tracking-[0.06em]">
            Ember <span className="text-[var(--ev-accent)]">&amp;</span> Vine
          </a>
          <nav aria-label="Ember and Vine" className="hidden items-center gap-8 sm:flex">
            {[
              ['The room', '#room'],
              ['Menu', '#menu'],
              ['Visit', '#visit'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--ev-muted)] transition-colors hover:text-[var(--ev-ink)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#visit"
            className="border border-[var(--ev-accent)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ev-accent)] transition-colors hover:bg-[var(--ev-accent)] hover:text-[var(--ev-bg)]"
          >
            Reserve
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_118%,rgba(201,98,42,0.34),transparent_58%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-20 md:grid-cols-[1.35fr_0.65fr] md:items-end md:pb-32 md:pt-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ev-accent)]">
              {d.hero.kicker}
            </p>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.94] tracking-[-0.01em]">
              {d.hero.title}
              <br />
              <em className="text-[var(--ev-accent)]">{d.hero.emphasis}</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[var(--ev-muted)]">{d.hero.text}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#visit"
                className="bg-[var(--ev-accent)] px-7 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ev-bg)] transition-opacity hover:opacity-90"
              >
                {d.hero.primaryCta}
              </a>
              <a
                href="#menu"
                className="border-b border-[var(--ev-line)] pb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ev-muted)] transition-colors hover:border-[var(--ev-ink)] hover:text-[var(--ev-ink)]"
              >
                {d.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="border-t border-[var(--ev-line)] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ev-muted)]">
              Tonight
            </p>
            <dl>
              {[
                ['Tasting menu', 'Five courses'],
                ['Wine pairing', 'Optional'],
                ['Seatings', '5pm & 8pm'],
              ].map(([term, value]) => (
                <div key={term} className="mt-5 border-b border-[var(--ev-line)] pb-4 last:border-0">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ev-muted)]">
                    {term}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <DemoGallery photos={photos} containerClassName="max-w-6xl" />

      <section id="room" className="border-y border-[var(--ev-line)] bg-[#17100c]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.4fr_1fr] md:py-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ev-accent)]">
              {d.story.kicker}
            </p>
            <span className="mt-6 block h-px w-16 bg-[var(--ev-accent)]" />
          </div>
          <div>
            <h2 className="max-w-xl font-display text-3xl leading-tight md:text-4xl">
              {d.story.title}
            </h2>
            <div className="mt-8 grid gap-6 text-[15px] leading-7 text-[var(--ev-muted)] md:grid-cols-2">
              {d.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ev-accent)]">
            {d.menu.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{d.menu.title}</h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-[var(--ev-muted)]">
            {d.menu.note}
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {d.menu.sections.map((section, index) => (
            <div key={section.title}>
              <div className="flex items-baseline justify-between gap-4 border-b border-[var(--ev-line)] pb-3">
                <h3 className="font-display text-2xl">
                  <span className="mr-3 font-mono text-[10px] tracking-[0.2em] text-[var(--ev-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h3>
                {section.kicker && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ev-muted)]">
                    {section.kicker}
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-5">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="text-[15px]">
                      {item.name}
                      {item.note && (
                        <span className="text-[var(--ev-muted)]"> · {item.note}</span>
                      )}
                    </span>
                    <span
                      aria-hidden
                      className="mb-1 flex-1 border-b border-dotted border-[var(--ev-line)]"
                    />
                    <span className="font-mono text-sm text-[var(--ev-muted)]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="border-y border-[var(--ev-line)] bg-[#17100c]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ev-accent)]">
              {d.visit.kicker}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">{d.visit.title}</h2>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-[var(--ev-ink)]">
              {d.visit.location}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--ev-muted)]">{d.visit.note}</p>
            <a
              href="#menu"
              className="mt-9 inline-block bg-[var(--ev-accent)] px-7 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ev-bg)] transition-opacity hover:opacity-90"
            >
              {d.close.cta}
            </a>
          </div>
          <dl className="divide-y divide-[var(--ev-line)] border-y border-[var(--ev-line)]">
            {d.visit.hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-[var(--ev-muted)]">{row.days}</dt>
                <dd className="font-mono text-[11px] uppercase tracking-[0.16em]">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">{d.close.title}</h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[var(--ev-muted)]">
          {d.close.text}
        </p>
        <a
          href="#visit"
          className="mt-9 inline-block border border-[var(--ev-accent)] px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ev-accent)] transition-colors hover:bg-[var(--ev-accent)] hover:text-[var(--ev-bg)]"
        >
          {d.close.cta}
        </a>
      </section>

      <DemoCredit />
    </main>
  );
}
