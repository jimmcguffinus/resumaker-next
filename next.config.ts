import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The 'output: "export"' line MUST be removed.
  // We are no longer exporting a static site.
  images: {
    unoptimized: true
  }
};

export default nextConfig;
