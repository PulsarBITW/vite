import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: {tsconfigPath: 'tsconfig.app.json'},
      eslint: {lintCommand: 'eslint .', useFlatConfig: true},
      stylelint: {
        lintCommand: 'stylelint "**/*.{css,scss}"',
      },
      overlay: {
        position: 'tl',
      },
    }),
  ],
  esbuild: {legalComments: 'none'},
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
