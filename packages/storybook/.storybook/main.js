import { mergeConfig } from "vite";

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: [
        "../../components/**/*.stories.mdx",
        "../../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../stories/**/*.stories.mdx",
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};

export default config;
