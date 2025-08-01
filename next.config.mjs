/** @type {import('next').NextConfig} */
const nextConfig = {
  // The 'output: "export"' line is now gone.
  images: {
    unoptimized: true
  },
  // Handle ES module compatibility issues
  transpilePackages: ['@react-pdf/renderer'],
  // Disable server-side rendering for pages that use react-pdf
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;
