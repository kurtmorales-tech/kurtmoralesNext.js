/**
 * Photography for the live demo restaurant sites.
 *
 * Photos are optional. Every demo is designed to stand on type, colour and
 * layout alone, so an empty list looks finished rather than broken — the
 * gallery band simply does not render. That is the state they ship in today.
 *
 * To add photography:
 *
 *   1. Export the file at 1600px on the long edge, WebP, ideally under 200 KB
 *      (static export has no image optimizer, so what you save is what ships).
 *      Save it as `public/demos/<slug>/<name>.webp`.
 *   2. Add `{ src, alt }` to that demo's list below. List order is display
 *      order; the first photo is the wide lead image.
 *   3. `npm run build`. Nothing else needs changing.
 *
 * Alt text describes the photograph for someone who cannot see it — "Table by
 * the window at dusk", not "Ember & Vine". Do not repeat the restaurant name,
 * which is already on the page.
 */
export interface DemoPhoto {
  src: `/${string}`;
  alt: string;
}

export const demoPhotos: Record<string, DemoPhoto[]> = {
  'ember-vine': [],
  'sol-sabor': [],
  'desert-bloom': [],
};

/** Photos for a demo, always returning an array so callers never branch on it. */
export function photosFor(slug: string): DemoPhoto[] {
  return demoPhotos[slug] ?? [];
}
