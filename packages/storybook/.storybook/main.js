const { mergeConfig } = require("vite");

module.exports = {
    stories: [
        "../../components/**/*.stories.mdx",
        "../../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../../components/**/*.stories.mdx",
        "../../components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/html",
    core: { builder: "@storybook/builder-vite" },
    async viteFinal(config, { configType }) {
        // return the customized config
        return mergeConfig(config, {
            plugins: [
                ...(await import("@atomico/vite")).default({
                    storybook: ["components/**/*"],
                    cssLiterals: {
                        postcss: true,
                        minify: true,
                    },
                }),
            ],
        });
    },
};
