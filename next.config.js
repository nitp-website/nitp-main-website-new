const withVideos = require('next-videos');

module.exports = withVideos({
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
        {
            protocol: 'https',
            hostname: 'i.postimg.cc',
        },
      ],
  },
});


module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com', 'drive.google.com'], // Add external domains here
    },
  };
  