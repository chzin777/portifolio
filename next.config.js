/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      // Adicione aqui outros domínios se quiser usar outros servidores de imagem
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
