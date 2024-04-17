import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://vercel-api-one-gamma.vercel.app",
    },
  },
  plugins: [react()],
});
