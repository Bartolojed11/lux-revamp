module.exports = {
  reactStrictMode: true,
  env : {
    apiUrl: process.env.API_URL,
    apiInternalRoute: process.env.API_INTERNAL_URL,
    JWT_SECRET: process.env.JWT_SECRET
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
}
