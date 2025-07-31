/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line back.
  // This tells Next.js to create a clean '/out' folder.
  output: 'export',

  images: {
    unoptimized: true
  },
};

export default nextConfig; 