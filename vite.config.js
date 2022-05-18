const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: "512",
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "react-3d-socials",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "three", "@react-three/fiber"],
    },
  },
  plugins: [react()],
});
