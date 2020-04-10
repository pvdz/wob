const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/index.js")))
}

