import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      scale: 1,
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames(chunkInfo) {
          const { name = '' } = chunkInfo
          if (/\.(?:jpe?g|png|gif|svg)$/i.test(name)) {
            return 'images/[name]-[hash].[ext]'
          }
          if (/\.(?:ttf|woff|woff2|eot)$/i.test(name)) {
            return 'fonts/[name]-[hash].[ext]'
          }
          return '[ext]/[name]-[hash].[ext]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
