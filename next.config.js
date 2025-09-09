/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable strict type checking
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable ESLint during builds
    ignoreDuringBuilds: false,
  },
  // Optimize images and fonts
  optimizeFonts: true,
  images: {
    domains: [], // Add any external image domains here
    formats: ['image/webp', 'image/avif'],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Compress responses
  compress: true,
  // Enable strict mode
  reactStrictMode: true,
  // Generate static exports for better SEO (if needed)
  output: 'standalone',
}

module.exports = nextConfig
