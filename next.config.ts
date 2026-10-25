import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Concept/template artwork ships as static files in /public.
    unoptimized: true,
  },
};

export default nextConfig;
