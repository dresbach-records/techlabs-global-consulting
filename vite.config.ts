import { defineConfig } from 'vite';
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    javascriptObfuscator({
      options: {
        compact: true,
        stringArray: true
      }
    })
  ]
});
