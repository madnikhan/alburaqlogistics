// Alternative Next.js config for static export (shared hosting without Node.js)
// Rename this to next.config.ts if you need static export

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;

