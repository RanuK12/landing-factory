import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/landing-factory",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
