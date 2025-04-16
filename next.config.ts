import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' blob: data: http://localhost:8000 https://htaafraouti.fr https://supabase.com https://*.supabase.co https://avatars.githubusercontent.com https://lh3.googleusercontent.com https://frontend-assets.supabase.com; font-src 'self' data: https://fonts.googleapis.com https://cdnjs.cloudflare.com https://frontend-assets.supabase.com https://vercel.live; connect-src 'self' https://*.supabase.co wss://*.supabase.co;"
          }
        ]
      }
    ];
  },
};

export default nextConfig;