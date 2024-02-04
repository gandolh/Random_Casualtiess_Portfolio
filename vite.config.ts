import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Random_Casualtiess_Portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    manifest: true,
    rollupOptions: {
      external: ["GenerativeArt"],
    },
  },
})
