"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteMinifyPlugin = void 0;
const html_minifier_terser_1 = require("html-minifier-terser");
function ViteMinifyPlugin(options) {
    let config;
    return {
        name: 'vite-plugin-minify',
        configResolved: resolvedConfig => {
            config = resolvedConfig;
        },
        transformIndexHtml: {
            enforce: 'post',
            transform: html => {
                if (config.mode !== 'production') {
                    return html;
                }
                return (0, html_minifier_terser_1.minify)(html, {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: false,
                    removeEmptyAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    ...options,
                });
            },
        },
    };
}
exports.ViteMinifyPlugin = ViteMinifyPlugin;
