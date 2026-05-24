/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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

  // Turbopack config (empty to silence warning, webpack config below for fallback)
  turbopack: {},

  // Webpack config for loading native modules (fallback for --webpack mode)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });
    return config;
  },

  // Typed routes (moved from experimental in Next.js 16)
  typedRoutes: true,

  // Experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Set port for Docker deployment
  env: {
    PORT: '3002',
  },

  // Security headers (addresses VAPT findings: Clickjacking, HSTS, Missing Headers)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking protection (Finding 2.1)
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Clickjacking via CSP (Finding 2.1)
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          // HSTS — enforce HTTPS for 1 year, include subdomains (Finding 2.2)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          // Prevent MIME-type sniffing (Finding 2.4)
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information leakage (Finding 2.4)
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Restrict access to browser APIs (Finding 2.4)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

// Export config
module.exports = nextConfig;
