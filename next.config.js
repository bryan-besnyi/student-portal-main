/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        // You can specify a pathname if needed, like "/path/to/images/*"
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
