import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site. `npm run build` emits ./out, which is uploaded to
  // Cloudflare Workers static assets by `npm run deploy`.
  output: 'export',
  images: {
    // Static export has no image optimization server; artwork ships as
    // pre-sized files in /public.
    unoptimized: true,
  },
};

export default nextConfig;
