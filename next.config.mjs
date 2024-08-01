/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  // your other Next.js config options here
});

export default nextConfig;
