import { Plugin } from 'vite'
import { minify, MinifierOptions } from 'html-minifier-next'

/**
 * @param options [html-minifier-next options](https://github.com/j9t/html-minifier-next?tab=readme-ov-file#options-quick-reference)
 *
 * @default
 *
 * {
 * 	removeComments: true,
 * 	collapseWhitespace: true,
 * 	collapseBooleanAttributes: true,
 * 	removeAttributeQuotes: false,
 * 	removeEmptyAttributes: true,
 * 	minifyCSS: true,
 * 	minifyJS: true,
 * 	minifyURLs: true,
 * 	...options, // user provided options
 * }
 *
 * @returns vite-plugin-minify
 */
export function ViteMinifyPlugin(options?: MinifierOptions): Plugin {
  return {
    name: 'vite-plugin-minify',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
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

export default ViteMinifyPlugin
