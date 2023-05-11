/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/movies/trending',
        destination: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
