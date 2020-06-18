/*module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}*/
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: 'src/preload.js',
    }
  }
}
