import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.exercisedb.dev",
      },
    ],
  },
};

export default nextConfig;
