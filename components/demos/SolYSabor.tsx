import type { CSSProperties } from 'react';
import type { Concept } from '@/lib/data';
import { DemoBar, DemoCredit } from './DemoBar';

/**
 * Sol y Sabor — modern Mexican direction.
 *
 * High-contrast colour blocks, oversized type and a menu built to be read on
 * a phone at arm's length. The ordering path is the whole point of the page.
 */
export function SolYSabor({ concept }: { concept: Concept }) {
  const d = concept.demo;
  const [bg, accent, ink] = d.palette;

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--ss-bg)] text-[var(--ss-ink)] antialiased"
      style={
        {
          '--ss-bg': bg,
          '--ss-accent': accent,
          '--ss-ink': ink,
          '--ss-line': 'rgba(11, 91, 93, 0.18)',
          '--ss-soft': 'rgba(11, 91, 93, 0.88)',
          // Text-safe variants: the raw brand colours are used for blocks, but
          // small type needs a darker/lighter version to stay above 4.5:1.
          '--ss-accent-ink': '#a8401c',
          '--ss-accent-light': '#f4a07f',
          '--ss-on-accent': '#231007',
          '--ss-on-teal': 'rgba(247, 236, 217, 0.86)',
        } as CSSProperties
      }
    >
      <DemoBar slug={d.slug} title={concept.title} />

      <header className="sticky top-0 z-40 border-b border-[var(--ss-line)] bg-[var(--ss-bg)]/94 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-3 rounded-full bg-[var(--ss-accent)]" />
            <span className="text-lg font-black uppercase leading-none tracking-[-0.02em]">
              Sol y Sabor
            </span>
          </a>
          <nav aria-label="Sol y Sabor" className="hidden items-center gap-7 md:flex">
            {[
              ['Menu', '#menu'],
              ['Pickup', '#pickup'],
              ['Visit', '#visit'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ss-soft)] transition-colors hover:text-[var(--ss-ink)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#menu"
            className="rounded-full bg-[var(--ss-ink)] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--ss-bg)] transition-transform hover:-translate-y-0.5"
          >
            {d.hero.primaryCta}
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--ss-accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--ss-on-accent)]">
              {d.hero.kicker}
            </p>
            <h1 className="mt-7 text-[clamp(2.6rem,7.4vw,5.6rem)] font-black uppercase leading-[0.86] tracking-[-0.03em]">
              {d.hero.title}
              <br />
              <span className="text-[var(--ss-accent-ink)]">{d.hero.emphasis}</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[var(--ss-soft)]">{d.hero.text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[var(--ss-ink)] px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--ss-bg)] transition-transform hover:-translate-y-0.5"
              >
                {d.hero.primaryCta}
              </a>
              <a
                href="#menu"
                className="rounded-full border-2 border-[var(--ss-ink)] px-7 py-3 text-[11px] font-black uppercase tracking-[0.12em] transition-colors hover:bg-[var(--ss-ink)] hover:text-[var(--ss-bg)]"
              >
                {d.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ss-ink)] px-8 py-10 md:px-10 md:py-14">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--ss-bg)]/75">
                At the window
              </p>
              <p className="mt-6 text-[clamp(3rem,6.4vw,4.8rem)] font-black uppercase leading-[0.8] tracking-[-0.03em] text-[var(--ss-bg)]">
                Tacos
                <br />
                Birria
                <br />
                <span className="text-[var(--ss-accent-light)]">Aguas</span>
              </p>
              <p className="mt-8 max-w-[16rem] text-sm leading-6 text-[var(--ss-on-teal)]">
                Made to order, packed to travel, ready when you are.
              </p>
            </div>
            <span
              aria-hidden
              className="absolute -right-3 -top-5 grid h-24 w-24 -rotate-8 place-items-center rounded-full bg-[var(--ss-accent)] text-center text-[9px] font-black uppercase leading-tight tracking-[0.12em] text-[var(--ss-on-accent)] shadow-lg md:-right-6"
            >
              Open
              <br />
              late
            </span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[var(--ss-ink)] bg-[var(--ss-bg)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.35fr_1fr] md:py-16">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--ss-accent-ink)]">
            {d.story.kicker}
          </p>
          <div>
            <h2 className="max-w-2xl text-2xl font-black uppercase leading-tight tracking-[-0.01em] md:text-3xl">
              {d.story.title}
            </h2>
            <div className="mt-6 grid gap-5 text-[15px] leading-7 text-[var(--ss-soft)] md:grid-cols-2">
              {d.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--ss-accent-ink)]">
              {d.menu.kicker}
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
              {d.menu.title}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[var(--ss-soft)]">{d.menu.note}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {d.menu.sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col rounded-2xl border border-[var(--ss-line)] bg-white/45 p-6"
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-[var(--ss-line)] pb-4">
                <h3 className="text-sm font-black uppercase tracking-[0.14em]">{section.title}</h3>
                {section.kicker && (
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--ss-soft)]">
                    {section.kicker}
                  </span>
                )}
              </div>
              <ul className="mt-5 flex-1 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] font-bold leading-snug">{item.name}</span>
                      <span className="shrink-0 rounded-full border border-[var(--ss-ink)]/30 px-2.5 py-1 text-[11px] font-black">
                        {item.price}
                      </span>
                    </div>
                    {item.note && (
                      <p className="mt-0.5 text-xs leading-5 text-[var(--ss-soft)]">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="pickup" className="bg-[var(--ss-ink)] text-[var(--ss-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
            Pickup in three steps
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ['Build your order', 'Tacos, platos and drinks — everything on the menu travels.'],
              ['Pick a time', 'Choose the window that fits your break, not ours.'],
              ['Walk in, walk out', 'Give your name at the east window. We hand it over.'],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-[var(--ss-bg)]/20 pt-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ss-accent)] text-sm font-black text-[var(--ss-on-accent)]">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-black uppercase tracking-[0.06em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ss-on-teal)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[var(--ss-accent)] text-[var(--ss-on-accent)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--ss-on-accent)]">
              {d.visit.kicker}
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
              {d.visit.title}
            </h2>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.12em]">{d.visit.location}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--ss-on-accent)]">{d.visit.note}</p>
          </div>
          <dl className="divide-y divide-[var(--ss-ink)]/25 border-y border-[var(--ss-ink)]/25">
            {d.visit.hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm font-bold">{row.days}</dt>
                <dd className="text-[11px] font-black uppercase tracking-[0.1em]">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[var(--ss-ink)] text-[var(--ss-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
            {d.close.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[var(--ss-on-teal)]">
            {d.close.text}
          </p>
          <a
            href="#menu"
            className="mt-8 inline-block rounded-full bg-[var(--ss-accent)] px-8 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--ss-on-accent)] transition-transform hover:-translate-y-0.5"
          >
            {d.close.cta}
          </a>
        </div>
      </section>

      <DemoCredit />
    </main>
  );
}
