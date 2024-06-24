/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "naturalcalm.wpenginepowered.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
