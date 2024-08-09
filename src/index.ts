import { Plugin } from 'vite'
import { minify, Options } from 'html-minifier-terser'

/**
 * @param options [html-minifier-terser options](https://github.com/terser/html-minifier-terser?tab=readme-ov-file#options-quick-reference)
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
export function ViteMinifyPlugin(options?: Options): Plugin {
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
