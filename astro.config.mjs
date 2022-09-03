import { defineConfig } from "astro/config";
import Atomico from "@atomico/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [Atomico({ cssLiterals: { minify: true, postcss: true } })],
});
