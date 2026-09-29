import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/shop', destination: '/shop.html' },
      { source: '/product', destination: '/product.html' },
      { source: '/courses', destination: '/courses.html' },
      { source: '/course', destination: '/course.html' },
      { source: '/about', destination: '/about.html' },
      { source: '/how-it-works', destination: '/how-it-works.html' },
      { source: '/faq', destination: '/faq.html' },
      { source: '/contact', destination: '/contact.html' },
      { source: '/checkout', destination: '/checkout.html' },
      { source: '/course-checkout', destination: '/course-checkout.html' },
    ];
  },
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
