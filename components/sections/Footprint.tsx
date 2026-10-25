import { platforms } from '@/lib/data';

export function Footprint() {
  return (
    <section className="py-32 km-surface-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-24 reveal-left">
          <span className="km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
            Network
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand">
            Presence across platforms.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {platforms.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="reveal flex flex-col items-center justify-center p-8 km-panel group card-lift text-center"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="mb-5 km-text-soft group-hover:text-brand transition-all duration-300 group-hover:scale-110">
                ●
              </div>
              <span className="text-[9px] font-black km-text-soft uppercase tracking-widest group-hover:text-brand/80 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
