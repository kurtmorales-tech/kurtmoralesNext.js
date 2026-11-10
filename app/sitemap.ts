import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.url}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/demos`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/book`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${site.url}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.6 },
  ];
}
