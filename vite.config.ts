import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [viteTsConfigPaths()],
  esbuild: {
    jsxInject: `import {JSXML} from '@jsxml/parser'`
  }
})