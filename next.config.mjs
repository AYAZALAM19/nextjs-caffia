/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      // Product images. Rendered via <AppImage>, which lets Cloudinary resize them
      // (Next's optimizer times out after 7s on large Cloudinary originals).
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "caffia.in",
      }
    ],
  },
};

export default nextConfig;
