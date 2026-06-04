import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mocelin.ind.br',
      },
    ],
  },
};

export default nextConfig;
