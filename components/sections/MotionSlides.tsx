import { IconSparkles, IconLayers, IconPalette } from '@/components/icons/Icon';

const slides = [
  { title: 'Win–Win', body: 'Partnerships that grow both sides.', hue: '#f48120' },
  { title: 'Trusted', body: 'Clear scope, honest timelines.', hue: '#6d5efc' },
  { title: 'Quality', body: 'Crafted, tested, accessible.', hue: '#b86b52' },
  { title: 'Secure by design', body: 'Privacy-first, minimal data.', hue: '#4b607c' },
];

export function MotionSlides() {
  return (
    <section id="motion" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,129,32,0.08),transparent_40rem)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl reveal-left">
          <span className="font-mono km-text-soft font-bold text-[10px] tracking-widest uppercase block mb-6">
            $ motion
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight text-brand text-pretty">
            Values in motion.
          </h2>
          <p className="mt-6 km-text-muted text-lg leading-relaxed">
            A multidimensional look at how we work — rotating, layered, alive.
          </p>
        </div>

        <div className="motion-stage" aria-label="Values carousel">
          <div className="motion-ring">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="motion-card km-panel"
                style={{
                  transform: `rotateY(${i * 90}deg) translateZ(260px)`,
                  borderColor: slide.hue,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: slide.hue, color: '#fff' }}
                  >
                    {i === 0 && <IconSparkles className="h-5 w-5" />}
                    {i === 1 && <IconLayers className="h-5 w-5" />}
                    {i === 2 && <IconPalette className="h-5 w-5" />}
                    {i === 3 && <IconSparkles className="h-5 w-5" />}
                  </span>
                  <h3 className="text-xl font-bold km-text-strong">{slide.title}</h3>
                </div>
                <p className="km-text-muted text-sm leading-relaxed">{slide.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="km-panel p-6 material-elev-2">
            <IconLayers className="h-6 w-6 text-brand mb-3" />
            <h3 className="font-bold km-text-strong mb-2">Layered</h3>
            <p className="text-sm km-text-muted">Depth, parallax, and motion that respect reduced-motion.</p>
          </div>
          <div className="km-panel p-6 material-elev-3">
            <IconPalette className="h-6 w-6 text-brand mb-3" />
            <h3 className="font-bold km-text-strong mb-2">Material feel</h3>
            <p className="text-sm km-text-muted">Elevation, ripple, and tonal surfaces inspired by Material You.</p>
          </div>
          <div className="km-panel p-6 material-elev-4">
            <IconSparkles className="h-6 w-6 text-brand mb-3" />
            <h3 className="font-bold km-text-strong mb-2">Alive</h3>
            <p className="text-sm km-text-muted">Subtle motion that guides attention without distraction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
