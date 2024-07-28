import { defineConfig, loadEnv } from "vite";
import { cwd } from "node:process";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), "");

  return {
    define: {
      "process.env": env,
    },
    plugins: [react()],
  };
});
