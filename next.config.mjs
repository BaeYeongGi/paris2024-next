/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baeyeonggi.github.io',
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
