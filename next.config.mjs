/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: 'https://taxi-novoe.tvoe.taxi',
  //       permanent: true, // если хочешь постоянный редирект (SEO-френдли)
  //     },
  //   ]
  // },
}

export default nextConfig;
