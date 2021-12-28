module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/web-components",
  // Add support to atomico/jsx-runtime
  babel: (config) => {
    config.plugins.push([
      require.resolve("@babel/plugin-transform-react-jsx"),
      {
        runtime: "automatic",
        importSource: "atomico",
      },
    ]);

    return config;
  },
};
