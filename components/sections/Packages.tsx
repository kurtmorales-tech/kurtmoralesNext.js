import Link from 'next/link';
import { packages, site } from '@/lib/data';

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
            Projects start at ${site.startingPrice}. Final pricing depends on scope, content,
            integrations, and timeline — these tracks make it easier to choose the right starting
            point.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`reveal relative p-8 border card-lift ${
                item.featured
                  ? 'bg-brand text-[#13110f] border-brand'
                  : 'km-panel km-border-soft'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.featured && (
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest bg-[#13110f] text-white px-3 py-1.5">
                  Popular
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-3 ${item.featured ? 'text-[#13110f]' : 'km-text-strong'}`}
              >
                {item.title}
              </h3>
              <div className="mb-6">
                <p
                  className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                    item.featured ? 'text-[#13110f]/75' : 'km-text-soft'
                  }`}
                >
                  {item.price ? 'Starting at' : 'Pricing'}
                </p>
                <p
                  className={`mt-1 font-display font-medium leading-none ${
                    item.price ? 'text-3xl' : 'text-2xl'
                  } ${item.featured ? 'text-[#13110f]' : 'km-text-strong'}`}
                >
                  {item.price ? `$${item.price}` : 'Custom quote'}
                </p>
              </div>
              <p
                className={`text-sm leading-relaxed mb-8 ${item.featured ? 'text-[#13110f]/80' : 'km-text-muted'}`}
              >
                {item.desc}
              </p>
              <ul className="space-y-4">
                {item.items.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <span
                      className={`mt-1 h-1.5 w-1.5 flex-shrink-0 ${item.featured ? 'bg-[#13110f]' : 'bg-brand'}`}
                    />
                    <span className={item.featured ? 'text-[#13110f]/90' : 'km-text-muted'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm km-text-muted">
          Not sure which track fits?{' '}
          <Link href="/contact" className="font-semibold text-brand hover:underline">
            Tell us about the project
          </Link>{' '}
          and we&apos;ll recommend the right starting point.
        </p>
      </div>
    </section>
  );
}
