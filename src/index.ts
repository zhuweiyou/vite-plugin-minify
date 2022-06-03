import { Plugin, ResolvedConfig } from 'vite'
import { minify, Options } from 'html-minifier-terser'
import { join } from 'path'
import { glob } from 'glob'
import { readFile, writeFile } from 'fs/promises'

const PLUGIN_NAME = 'vite-plugin-minify'

export function ViteMinifyPlugin(options?: Options): Plugin {
  let config: ResolvedConfig

  return {
    name: PLUGIN_NAME,
    enforce: 'post',
    apply: 'build',
    configResolved: resolvedConfig => {
      config = resolvedConfig
    },
    closeBundle: () => {
      glob(join(config.build.outDir, '**', '*.html'), (err, files) => {
        if (err) {
          return console.error(`[${PLUGIN_NAME}]`, err)
        }
        files.forEach(async file => {
          try {
            const buffer = await readFile(file, { encoding: 'utf-8' })
            const minified = await minify(buffer.toString(), {
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
            await writeFile(file, minified, 'utf-8')
            console.log(`[${PLUGIN_NAME}]`, `minified ${file}`)
          } catch (e) {
            console.error(`[${PLUGIN_NAME}]`, e)
          }
        })
      })
    },
  }
}

export default ViteMinifyPlugin
