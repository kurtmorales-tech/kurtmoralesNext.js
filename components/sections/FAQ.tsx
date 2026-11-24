import { faqs } from '@/lib/data';

export function FAQ({ heading = true }: { heading?: boolean }) {
  return (
    <section id="faq" className="py-32 km-surface-tint">
      <div className="max-w-4xl mx-auto px-6">
        {heading && (
          <div className="max-w-2xl mb-16 reveal-left">
            <span className="font-mono km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
              $ faq
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand text-pretty">
              Questions, answered.
            </h2>
          </div>
        )}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="km-panel p-6 group"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold km-text-strong">
                <span>{item.question}</span>
                <span aria-hidden className="text-brand text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 km-text-muted text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
