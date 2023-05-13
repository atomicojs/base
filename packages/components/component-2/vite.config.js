import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
        plugins: atomico({ cssLiterals: { minify: true, postcss: true } }),
});