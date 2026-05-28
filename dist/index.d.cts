import { Plugin } from 'vite';
import { MinifierOptions } from 'html-minifier-next';

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
declare function ViteMinifyPlugin(options?: MinifierOptions): Plugin;

export { ViteMinifyPlugin, ViteMinifyPlugin as default };
