const withVideos = require('next-videos');

module.exports = withVideos({
  images: {
    domains: [
      'via.placeholder.com', 
      'drive.google.com', 
      'i.postimg.cc',
      'lh3.googleusercontent.com',
      'web.nitp.ac.in'
    ],
    
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


  