# vite-plugin-minify

minify html in production

## Usage

```bash
npm install vite-plugin-minify -D
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
  ],
})
```
