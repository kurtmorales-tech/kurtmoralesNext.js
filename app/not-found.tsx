import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="km-pill mb-8 text-[10px] font-black uppercase tracking-[0.2em] km-text-muted">
          404
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight km-text-strong mb-6">
          This page <span className="text-brand">isn&apos;t on the menu.</span>
        </h1>
        <p className="km-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Head back home or tell us what you
          were trying to find.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="km-button km-button-primary">
            Back home
          </Link>
          <Link href="/contact" className="km-button km-button-secondary">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
