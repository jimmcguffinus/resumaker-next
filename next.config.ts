import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Tell Next.js to generate a static export of your application.
   * This is required for static hosts like Cloudflare Pages.
   */
  output: 'export',

  // This setting is correct for static export
  images: {
    unoptimized: true
  }
};

export default nextConfig;
