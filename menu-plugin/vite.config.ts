import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: "./dist",
        // entryFileNames: "plugin.js",
        // assetFileNames: "plugin.css",
        // chunkFileNames: "chunk.js",
        // manualChunks: undefined,
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      name: 'menu',
      formats: ["umd", "iife"],
      entry: "src/main.ts",
    },
  },
});
