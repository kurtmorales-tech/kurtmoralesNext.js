import Link from 'next/link';

/**
 * Studio chrome wrapped around every live demo. It is deliberately plain and
 * visually separate from the demo site below it, so a visitor always knows
 * they are looking at a demo — and always has a way back to the picker.
 */
export function DemoBar({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="relative z-50 bg-[#0b0b0c] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5 sm:px-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
          Live demo <span className="mx-1 text-white/25">/</span>
          <span className="text-white">{title}</span>
        </p>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/demos"
            className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
          >
            All demos
          </Link>
          <Link
            href={`/contact?style=${slug}`}
            className="bg-white px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b0b0c] transition-colors hover:bg-white/85"
          >
            Choose this direction
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Footer credit inside a demo. Keeps the demo honest about what it is without
 * interrupting the restaurant site above it.
 */
export function DemoCredit() {
  return (
    <div className="bg-[#0b0b0c] px-6 py-6 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
        Demo site by{' '}
        <Link href="/" className="text-white/75 underline underline-offset-4 hover:text-white">
          KM Web Design
        </Link>
        {' '}· Menus, hours and locations are sample content ·{' '}
        <Link href="/demos" className="text-white/75 underline underline-offset-4 hover:text-white">
          Try another direction
        </Link>
      </p>
    </div>
  );
}
