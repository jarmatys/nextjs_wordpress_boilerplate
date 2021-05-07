module.exports = {
  images: {
    domains: ['klient.armatys.me', 'images.unsplash.com']
  },
  trailingSlash: true, // add slash on the end of url
  async rewrites() {
    return [
      {
        source: '/kontakt/',
        destination: '/contact/',
      },
    ]
  },
};
