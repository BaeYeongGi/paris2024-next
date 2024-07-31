/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baeyeonggi.github.io',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  },
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@/svgr/webpack'],
  //         as: '*.js'
  //       }
  //     }
  //   }
  // }
};

export default nextConfig;
