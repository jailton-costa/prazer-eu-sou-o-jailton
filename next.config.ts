import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prazer-eu-sou-o-jailton.vercel.app',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
