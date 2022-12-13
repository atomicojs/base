const { mergeConfig } = require("vite");

module.exports = {
    stories: [
        "../../components/**/*.stories.mdx",
        "../../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/web-components",
    core: { builder: "@storybook/builder-vite" },
    async viteFinal(config, { configType }) {
        // return the customized config
        return mergeConfig(config, {
            plugins: [
                ...(await import("@atomico/vite")).default({
                    storybook: ["src/**/*"],
                }),
            ],
        });
    },
};
