/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    { source: "/contact", destination: "/form", permanent: false },
  ],
  rewrites: async () => [
    {
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source: "/api/movie/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    },
  ],
};

module.exports = nextConfig;
