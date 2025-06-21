import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    (mode === "development" || !mode) &&
      componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Para GitHub Pages: usa o nome do repositório como base
  // Para desenvolvimento local: usa a raiz
  base: command === 'build' ? '/marcelo-s-ribeiro-stellar-ai/' : '/',
}));
