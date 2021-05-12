import pluginMetaUrl from "@uppercod/vite-meta-url";
import { readFile } from "fs/promises";
/**
 * @type {import("vite").UserConfig}
 */
const userConfig = {
  plugins: [
    pluginMetaUrl({
      css: async (path) => ({ inline: await readFile(path) }),
    }),
  ],
  esbuild: {
    jsxFactory: "_jsx",
    jsxInject: `import {jsx as _jsx} from 'atomico/jsx-runtime'`,
  },
  build: {
    target: "esnext",
  },
};

export default userConfig;
