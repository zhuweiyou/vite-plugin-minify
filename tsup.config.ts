import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  external: ['vite'],
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true,
})
