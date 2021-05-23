import pluginMetaUrl from "@uppercod/vite-meta-url";
import csso from "csso";
import { readFile } from "fs/promises";

/**@type {import("vite").UserConfig} */

const config = {
  esbuild: {
    jsxFactory: "_jsx",
    jsxInject: `import {h as _jsx, css as _css} from 'atomico'`,
  },
  build: {
    target: "esnext",
  },
  plugins: [
    pluginMetaUrl({
      css: async (path, server) => {
        const code = await readFile(path, "utf-8");
        return {
          inline: `_css\`${server ? code : csso.minify(code).css}\``,
        };
      },
      md: true,
    }),
  ],
};

export default config;
