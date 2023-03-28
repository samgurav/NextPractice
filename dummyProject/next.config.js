/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "wembleypark.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
