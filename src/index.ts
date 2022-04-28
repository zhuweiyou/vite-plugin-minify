import { Plugin, ResolvedConfig } from 'vite'
import { minify, Options } from 'html-minifier-terser'

export function ViteMinifyPlugin(options?: Options): Plugin {
  let config: ResolvedConfig

  return {
    name: 'vite-plugin-minify',
    configResolved: resolvedConfig => {
      config = resolvedConfig
    },
    transformIndexHtml: {
      enforce: 'post',
      transform: html => {
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
    },
  }
}
