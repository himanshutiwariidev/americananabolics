/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['172.16.2.36'],
  async headers() {
    return [
      {
        source: '/flyingbird.webm',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

export default nextConfig;