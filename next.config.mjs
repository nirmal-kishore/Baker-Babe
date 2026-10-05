/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern, well-compressed formats; AVIF first, WebP fallback.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
