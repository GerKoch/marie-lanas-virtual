import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "marielanas.com",
          },
        ],
        destination: "https://www.marielanas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
