/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images:{
  //   domains:['www.elancesolution.com']
  // }
}

module.exports = nextConfig

// const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

// module.exports = withImages(withTM());