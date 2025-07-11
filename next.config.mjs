// next.config.mjs
import withVideos from 'next-videos';

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
};

export default withVideos(nextConfig);
