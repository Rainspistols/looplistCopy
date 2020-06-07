require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.CONTENTFUL_SPACE_ID,
  },
  publicRuntimeConfig: {
    API_URL: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

// for correct SVG imports
const withImages = require('next-images');
module.exports = withImages();
