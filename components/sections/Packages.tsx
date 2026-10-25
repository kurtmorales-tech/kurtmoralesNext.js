import { packages } from '@/lib/data';

export function Packages() {
  return (
    <section id="packages" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-brand/5 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20 reveal-left">
          <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
            Packages
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand text-pretty">
            Flexible starting points for growing businesses.
          </h2>
          <p className="mt-6 km-text-muted leading-relaxed">
            Final pricing depends on scope, content, integrations, and timeline. These tracks make
            it easier to choose the right starting point.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`reveal relative p-8 border card-lift ${
                item.featured
                  ? 'bg-brand text-white border-brand'
                  : 'km-panel km-border-soft'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.featured && (
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest bg-white text-brand px-3 py-1.5">
                  Popular
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-4 ${item.featured ? 'text-white' : 'km-text-strong'}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-8 ${item.featured ? 'text-white/80' : 'km-text-muted'}`}
              >
                {item.desc}
              </p>
              <ul className="space-y-4">
                {item.items.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <span
                      className={`mt-1 h-1.5 w-1.5 flex-shrink-0 ${item.featured ? 'bg-white' : 'bg-brand'}`}
                    />
                    <span className={item.featured ? 'text-white/90' : 'km-text-muted'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
