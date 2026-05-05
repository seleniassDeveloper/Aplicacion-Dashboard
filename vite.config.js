import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    fs: {
      // Permite importar código del dashboard real desde otra carpeta local.
      allow: [
        __dirname,
        path.resolve(__dirname, "../Aplicacion Dashboard/dashboard-react/src"),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/firebase")) return "vendor-firebase";
          if (
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react-router")
          ) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react/")) return "vendor-react";
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@appdash": path.resolve(__dirname, "../Aplicacion Dashboard/dashboard-react/src"),
      // Fuerza a usar UNA sola copia de React (la de este proyecto)
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
})
