/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

// module.exports = nextConfig

module.exports = {
  experimental: {
    serverActions: true,
  },
}
