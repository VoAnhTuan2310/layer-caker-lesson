import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Cho phép ảnh từ Sanity CDN
      },
    ],
  },
};

export default nextConfig;