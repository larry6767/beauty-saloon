const withLinaria = require('next-with-linaria')

/** @type {import('next').NextConfig} */
/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
    ],
  },
}

module.exports = withLinaria(nextConfig)
