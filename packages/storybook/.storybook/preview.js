import { decorator } from "@atomico/storybook";

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
    docs: {
        source: {
            // language: "jsx",
        },
    },
};

export const decorators = [decorator];
