/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  // Cloudflare Pages configuration
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://smart-app-info-backend.vercel.app',
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://smartappinfo.pages.dev',
  },
};

export default nextConfig;
