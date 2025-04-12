import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify has been removed in Next.js 15
  images: {
    domains: [], // Add domains for external images if needed
  },
  // Optimize for faster navigation
  experimental: {
    // Disable optimizeCss to avoid issues with critters
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@radix-ui/react-icons",
    ],
  },
  // Disable ESLint and TypeScript checking during build for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
