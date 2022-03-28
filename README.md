# vite-plugin-minify

minify html in production

## Usage

```js
import minifyPlugin from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    // input https://www.npmjs.com/package/html-minifier-terser options
    minifyPlugin({}),
  ],
})
```
