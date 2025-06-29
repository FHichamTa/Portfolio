import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", 
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", 
              "img-src 'self' blob: data:", 
              "font-src 'self' data: https://fonts.googleapis.com", 
              "connect-src 'self'", 
            ].join("; ")
          }
        ]
      }
    ];
  },
};

export default nextConfig;