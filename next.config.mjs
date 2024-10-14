/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
      };
    }

    // Ignore loader for 'argon2.cjs' to avoid 'node:crypto' issues in client-side builds
    config.module.rules.push({
      test: /argon2\.cjs$/,
      loader: "ignore-loader",
    });

    return config;
  },
};

export default nextConfig;
