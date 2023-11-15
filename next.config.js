const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "smartstore.salnl.net"],
  },
});

module.exports = nextConfig;
