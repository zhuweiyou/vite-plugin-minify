import { Plugin } from 'vite';
import { Options } from 'html-minifier-terser';

declare function ViteMinifyPlugin(options?: Options): Plugin;

export { ViteMinifyPlugin, ViteMinifyPlugin as default };
