// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
          },
          {
              protocol: 'https',
              hostname: 'web.nitp.ac.in',
          },
          {
              protocol: 'https',
              hostname: 'drive.google.com',
          },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.node/,
          use: 'raw-loader',
        });
        return config;
    },
    // Added experimental configuration to handle revalidate issues
    experimental: {
        // Allows more forgiving handling of revalidate values
        missingSuspenseWithCSRBailout: false,
        // Improved metadata handling
        typedRoutes: true,
        // Enhanced error handling for static generation
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
    // Security headers (addresses VAPT findings: Clickjacking, HSTS, Missing Headers)
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'self'",
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
