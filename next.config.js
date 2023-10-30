/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    NEXT_GRAPHQL_URL: "http://localhost:5000/graphql",
  },
};

module.exports = nextConfig;
