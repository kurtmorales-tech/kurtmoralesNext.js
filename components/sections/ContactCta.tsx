import Link from 'next/link';

export function ContactCta() {
  return (
    <section id="contact" className="relative py-32 km-surface-tint overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--km-surface-muted)] blur-2xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="reveal">
          <span className="km-pill mb-8">
            <span className="w-2 h-2 bg-green-400 pulse-dot" />
            <span className="font-mono text-[10px] font-black tracking-[0.18em] uppercase km-text-muted">
              Now booking restaurant projects
            </span>
          </span>
        </div>
        <h2
          className="reveal text-4xl md:text-6xl font-display font-medium leading-tight mb-8 km-text-strong"
          style={{ transitionDelay: '100ms' }}
        >
          Make your restaurant
          <br />
          <span className="text-brand">the easy choice.</span>
        </h2>
        <p
          className="reveal km-text-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ transitionDelay: '200ms' }}
        >
          Tell us where your current website is falling short. We&apos;ll recommend a focused next
          step for your menu, reservations, online ordering, or local visibility.
        </p>
        <div
          className="reveal flex flex-wrap justify-center gap-4"
          style={{ transitionDelay: '300ms' }}
        >
          <Link href="/contact" className="km-button km-button-primary">
            Request a consultation
          </Link>
          <a href="#projects" className="km-button km-button-dark">
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
