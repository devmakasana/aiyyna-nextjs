/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true
  },
    images: {
        domains: ['images.ctfassets.net']
      },
}

module.exports = nextConfig
