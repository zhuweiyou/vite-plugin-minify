import { Plugin } from 'vite';
import { Options } from 'html-minifier-terser';
export declare type ViteMinifyPluginOptions = Options;
export declare function ViteMinifyPlugin(options?: ViteMinifyPluginOptions): Plugin;
