import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // when deploying to a sub‑folder (GitHub pages, etc.) the default "/" base
  // causes all of the built assets to be requested from the site root. this
  // results in 404s and a blank page. using a relative base ("./") or the
  // repo name fixes it.
  base: mode === "production" ? "./" : "/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
