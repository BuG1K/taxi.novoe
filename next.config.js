/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://taxi-novoe.tvoe.taxi', // адрес назначения
        permanent: true, // 308, можно поставить false для 307
      },
    ];
  },
};

module.exports = nextConfig;