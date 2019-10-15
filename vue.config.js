module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hanarida2/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}