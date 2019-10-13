var path = require("path")

module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    basePath: 'http://localhost:3001/',
    //basePath: path.join(__dirname),
    auto2top: true,
    markdown: {
      baseUrl: '/docs/'
    },
    loadSidebar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    name: 'Responsive Paper'
  }
}