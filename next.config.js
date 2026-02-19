/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Untuk gambar lokal dari /public, tidak perlu konfigurasi tambahan.
    // Tambahkan domain di sini jika menggunakan gambar dari URL eksternal:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'example.com' },
    // ],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
