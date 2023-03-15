/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "standalone",
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig
