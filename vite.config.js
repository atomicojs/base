import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    ...atomico({
      cssLiterals: { postcss: true },
    }),
  ],
});
