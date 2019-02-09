// **************************************************************************************
// **************************************************************************************
// SEE
// https://jaketrent.com/post/environment-variables-in-nextjs/
// **************************************************************************************
// **************************************************************************************

const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}
