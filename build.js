console.log('build start...')

//https://github.com/doug2k1/nanogen

const fse = require('fs-extra')
const path = require('path')
//const { promisify } = require('util')
const { promisify } = require("bluebird")
const ejsRender = require('ejs').render
const ejsRenderFile = promisify(require('ejs').renderFile)
const marked = promisify(require('marked'))
const fm = require('front-matter')
const globP = promisify(require('glob'))

var siteData
if (process.env.NODE_ENV != 'production') {
  siteData = require('./site-data-dev')
} else {
  siteData = require('./site-data-prod')
}
const buildData = {
  "site": siteData
}
const css = fse.readFileSync('src/css/page.min.css', 'utf8');
buildData.site.style = css;

const srcPath = './src'
const distPath = './public'

// clear destination folder
fse.emptyDirSync(distPath)

// copy assets folder
//fse.copy(`${srcPath}/css`, `${distPath}/css`)
fse.copy(`${srcPath}/icons`, `${distPath}/icons`)
fse.copy(`${srcPath}/icons/favicon.ico`, `${distPath}/favicon.ico`)
fse.copy(`${srcPath}/img`, `${distPath}/img`)
// fse.copy(`${srcPath}/js`, `${distPath}/js`)
fse.copy(`${srcPath}/milligram.min.css`, `${distPath}/milligram.min.css`)

// read page templates
//globP('**/*.@(md|ejs|html)', { cwd: `${srcPath}/pages` })
globP('**/*.ejs', { cwd: `${srcPath}/pages` })
.then((files) => {
  files.forEach((file) => {
    const fileData = path.parse(file)
    const destPath = path.join(distPath, fileData.dir)
    fse.mkdirs(destPath)
    .then(() => {
      return fse.readFile(`${srcPath}/pages/${file}`, 'utf-8')
    })
    .then((data) => {
      return fm(data)
    })
    .then((fmData) => {
      fmData.body = ejsRender(fmData.body, Object.assign({}, buildData))
      return fmData
    })
    .then((fmDataEjs) => {
      var layout = 'layout-'+fmDataEjs.attributes.layout+'.ejs';
      return ejsRenderFile(`${srcPath}/${layout}`, Object.assign({}, buildData, { body: fmDataEjs.body, pagename: path.join('/', fileData.dir, fileData.name) + '.html' }));
//       switch (fmDataEjs.attributes.layout) {
//         case 'main':
//           return ejsRenderFile(`${srcPath}/layout-main.ejs`, Object.assign({}, buildData, { body: fmDataEjs.body }));
//         case 'search':
//           return ejsRenderFile(`${srcPath}/layout-search.ejs`, Object.assign({}, buildData, { body: fmDataEjs.body }));
//         case '404':
//           return ejsRenderFile(`${srcPath}/layout-404.ejs`, Object.assign({}, buildData, { body: fmDataEjs.body }));
//         case 'login':
//           return ejsRenderFile(`${srcPath}/layout-login.ejs`, Object.assign({}, buildData, { body: fmDataEjs.body }));
//         default:
//           return ejsRenderFile(`${srcPath}/layout-undefined.ejs`, Object.assign({}, buildData, { body: fmDataEjs.body }));
//       }
    })
    .then((layoutContent) => {
      fse.writeFile(`${destPath}/${fileData.name}.html`, layoutContent)
    })
    .catch((err) => { console.error(err) })
  })
})
.catch((err) => { console.error(err) })

const srcFunctionsPath = './src/functions'
const destFunctionsPath = './functions'

fse.remove(`${destFunctionsPath}/index.js`)
globP('*.js', { cwd: `${srcFunctionsPath}` })
.then((files) => {
  files.forEach((file) => {
    const fileData = path.parse(file)
    const destPath = path.join(destFunctionsPath, fileData.dir)
    fse.readFile(`${srcFunctionsPath}/${file}`, 'utf-8')
    .then((data) => {
      return ejsRender(data, Object.assign({}, buildData))
    })
    .then((data) => {
      fse.writeFile(`${destPath}/${fileData.name}.js`, data)
    })
    .catch((err) => { console.error(err) })
  })
})
.catch((err) => { console.error(err) })

console.log('build end...')
