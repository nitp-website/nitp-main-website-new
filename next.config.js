const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Required for Docker standalone build
  output: 'standalone',

  // Reduce production bundle debugging overhead
  productionBrowserSourceMaps: false,

  // External image support
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'web.nitp.ac.in' },
      { protocol: 'https', hostname: 'drive.google.com' },
    ],
  },

  // Longer timeout for ISR pages (default is 60s)
  staticPageGenerationTimeout: 120,

  // Webpack config for loading native modules or custom video formats
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });
    return config;
  },

  // Experimental tweaks to reduce build errors & improve DX
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Set port for Docker deployment
  env: {
    PORT: '3002',
  },
};

// Export with videos plugin only
module.exports = withVideos(nextConfig);
