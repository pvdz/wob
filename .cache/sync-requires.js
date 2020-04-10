const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/templates/post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/templates/tag.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/templates/category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/qfox/gatsby/sites/wob/src/pages/index.js")))
}

