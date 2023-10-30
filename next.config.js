/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    NEXT_GRAPHQL_URL: process.env.NEXT_GRAPHQL_URL,
  },
};

module.exports = nextConfig;
