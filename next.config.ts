import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/landing-factory",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
