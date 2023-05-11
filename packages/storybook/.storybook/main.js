/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: [
        "../../components/**/*.stories.mdx",
        "../../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
        // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
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

export default config;
