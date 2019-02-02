require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withTypescript = require('@zeit/next-typescript')

const isProd = process.env.NODE_ENV === 'production'
const envFile = isProd ? '.env' : '.env.dev'

module.exports = withTypescript({
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, envFile),
        safe: true,
        systemvars: true,
      }),
    ]

    return config
  },
})
