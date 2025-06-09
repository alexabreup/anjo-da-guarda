/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath removido para corrigir problemas de deploy no Netlify
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
