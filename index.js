const { minify } = require('html-minifier-terser')

function minifyPlugin(options = {}) {
  return {
    name: 'vite-plugin-minify',
    enforce: 'post',
    transformIndexHtml: html => {
      if (process.env.NODE_ENV !== 'production') {
        return html
      }
      return minify(html, {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        ...options,
      })
    },
  }
}

module.exports = minifyPlugin
