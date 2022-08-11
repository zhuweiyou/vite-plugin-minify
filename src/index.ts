import { Plugin, ResolvedConfig } from 'vite'
import { minify, Options } from 'html-minifier-terser'

const PLUGIN_NAME = 'vite-plugin-minify'

export function ViteMinifyPlugin(options?: Options): Plugin {
  let config: ResolvedConfig

  return {
    name: PLUGIN_NAME,
    enforce: 'post',
    apply: 'build',
    configResolved: (resolvedConfig) => {
      config = resolvedConfig
    },
    transformIndexHtml: (html) => {
      if (config.mode !== 'production') {
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

export default ViteMinifyPlugin
