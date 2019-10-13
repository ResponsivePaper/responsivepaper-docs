var Renderer = require('docsify-server-renderer')
var readFileSync = require('fs').readFileSync
var writeFileSync = require('fs').writeFileSync
var fs = require('fs')

var config = require('./ssr.config')
var path = require('path')
// init
//config.config.basePath = path.join(__dirname)PP
var renderer = new Renderer({
  template: readFileSync(path.join(__dirname, 'ssr.html'), 'utf-8'),
  config: config.config
})

var urls = []
urls.push({ url: '/', mdFile: 'readme.md', htmlFileName: 'index.html' })
urls.push({ url: '/tutorial', mdFile: 'tutorial.md', htmlFileName: 'tutorial.html' })
urls.push({ url: '/getting-started', mdFile: 'getting-started.md', htmlFileName: 'getting-started.html' })
urls.push({ url: '/examples', mdFile: 'examples.md', htmlFileName: 'examples.html' })
urls.push({ url: '/css-reference', mdFile: 'css-reference.md', htmlFileName: 'css-reference.html' })
urls.push({ url: '/api-and-deployment', mdFile: 'api-and-deployment.md', htmlFileName: 'api-and-deployment.html' })

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
var targetDir = path.join(__dirname, '..', '..', 'reportsjs', 'pdfserver', 'public', 'docs')

fs.createReadStream(path.join(__dirname, 'docs', '_sidebar.md')).pipe(fs.createWriteStream(path.join(targetDir, '_sidebar.md')))

asyncForEach(urls, async (u) => {
  await renderer.renderToString(u.url, u.mdFile)
    .then(html => {
      html = html.replace(config.config.basePath, '/docs/')

      html = html.replace('"routerMode":"history"', '"routerMode":"hash"')
      writeFileSync(path.join(targetDir, u.htmlFileName), html)
      fs.createReadStream(path.join(__dirname, 'docs', u.mdFile)).pipe(fs.createWriteStream(path.join(targetDir, 'docs', u.mdFile)))
    })
    .catch(err => {
      console.log(err)
    })


})




