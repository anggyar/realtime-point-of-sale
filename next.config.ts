import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://atpnrkzxqiwthjeihsbl.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atpnrkzxqiwthjeihsbl.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
