import { processSteps } from '@/lib/data';

export function Process() {
  return (
    <section id="process" className="py-32 km-surface-tint border-y km-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20 reveal-left">
          <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
            Process
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand text-pretty">
            A simple path from idea to launch.
          </h2>
          <p className="mt-6 km-text-muted leading-relaxed">
            Every build is organized around clarity: what you need, what your visitors need, and
            what has to happen before the site goes live.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="reveal km-panel p-8 card-lift relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-brand/70">
                {step.num}
              </span>
              <h3 className="text-xl font-bold km-text-strong mt-6 mb-4">{step.title}</h3>
              <p className="text-sm leading-relaxed km-text-muted">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
