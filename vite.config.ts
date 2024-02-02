import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import { fileURLToPath } from "node:url";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./src"),
      "@nodeModule": path.resolve(__dirname, "./node_modules"),
    },
  },

  build: {
    manifest: true,
    rollupOptions: {
      external: ["GenerativeArt"],
    },
  },
})
