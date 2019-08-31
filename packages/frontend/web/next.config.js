const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const nextConfig = {
  pageExtensions: ['mdx', 'tsx', 'ts'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.po/,
      use: [{
        loader: '@lingui/loader'
      }]
    });
    return config
  }
};

module.exports = withPlugins([
  nextEnv(),
], nextConfig);