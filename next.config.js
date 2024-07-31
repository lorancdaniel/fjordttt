const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async rewrites() {
    return [
      {
        source: `/api/dating-sites/:path*`,
        destination:
          "https://h22.seohost.pl/~srv40338/headlesswp/wp-json/dating-sites/v1/sites/:path*",
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["h22.seohost.pl"],
  },
};

module.exports = withMDX(nextConfig);
