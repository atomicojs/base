module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
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
