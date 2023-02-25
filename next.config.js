const withLinaria = require('next-with-linaria')
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
    ],
  },
  i18n,
}

module.exports = withLinaria(nextConfig)
