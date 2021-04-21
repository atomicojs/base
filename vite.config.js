export default {
  esbuild: {
    jsxFactory: "_jsx",
    jsxInject: `import {jsx as _jsx} from 'atomico/jsx-runtime'`,
  },
};
