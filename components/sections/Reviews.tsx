import { reviews } from '@/lib/data';

export function Reviews() {
  return (
    <section id="reviews" className="py-32 km-surface-soft border-y km-border-soft overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16 reveal-left">
          <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
            Client Proof
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand text-pretty">
            Built for clear handoff, faster launches, and measurable business value.
          </h2>
          <p className="km-text-muted text-lg leading-relaxed mt-6">
            Real testimonials can be added as projects go live. For now, these cards highlight the
            outcomes and working experience clients can expect.
          </p>
        </div>
        <div className="reviews-shell reveal relative overflow-hidden">
          <div className="reviews-fade reviews-fade-left" aria-hidden="true" />
          <div className="reviews-fade reviews-fade-right" aria-hidden="true" />
          <div className="reviews-marquee">
            {[0, 1].map((duplicate) => (
              <div className="reviews-group" aria-hidden={duplicate === 1 ? 'true' : undefined} key={duplicate}>
                {reviews.map((review) => (
                  <article
                    key={`${duplicate}-${review.label}`}
                    className="w-[19rem] md:w-[22rem] flex-shrink-0 km-panel p-8 card-lift"
                  >
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest km-text-soft">
                        {review.label}
                      </span>
                      <div className="text-brand text-lg" aria-hidden="true">
                        ✦
                      </div>
                    </div>
                    <p className="text-base leading-relaxed km-text-muted mb-8">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <div className="pt-6 border-t km-border-soft">
                      <p className="text-sm font-bold km-text-strong">{review.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.24em] km-text-soft mt-2">
                        {review.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
