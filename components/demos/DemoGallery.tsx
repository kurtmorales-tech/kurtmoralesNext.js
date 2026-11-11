import Image from 'next/image';
import type { DemoPhoto } from '@/lib/demo-photos';

/**
 * Photo band for a demo restaurant site.
 *
 * Renders nothing at all when the demo has no photography, which is the
 * default: the demos are built so type and colour carry the identity, and a
 * missing photo must never leave a hole in the page. One photo becomes a wide
 * lead image; two or three sit in a row, with the first given more weight on
 * small screens.
 */
export function DemoGallery({
  photos,
  containerClassName,
}: {
  photos: DemoPhoto[];
  /** Match the demo's own content width, e.g. `max-w-6xl` or `max-w-5xl`. */
  containerClassName: string;
}) {
  if (photos.length === 0) return null;

  const single = photos.length === 1;
  const gridClass = single
    ? 'grid-cols-1'
    : photos.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-2 md:grid-cols-3';

  return (
    <section
      aria-label="Inside the restaurant"
      className={`mx-auto ${containerClassName} px-6 pb-16 md:pb-20`}
    >
      <div className={`grid gap-3 md:gap-4 ${gridClass}`}>
        {photos.map((photo, index) => {
          const wideLead = photos.length === 3 && index === 0;

          return (
            <div
              key={photo.src}
              className={`relative overflow-hidden bg-black/5 ${
                single
                  ? 'aspect-[4/3] md:aspect-[16/9]'
                  : wideLead
                    ? 'col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/3]'
                    : 'aspect-[4/5] md:aspect-[4/3]'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={single ? '100vw' : wideLead ? '(min-width: 768px) 33vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
