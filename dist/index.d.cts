import { Plugin } from 'vite';
import { Options } from 'html-minifier-terser';

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
declare function ViteMinifyPlugin(options?: Options): Plugin;

export { ViteMinifyPlugin, ViteMinifyPlugin as default };
