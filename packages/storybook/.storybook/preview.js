import { decorator } from "@atomico/storybook";

export const parameters = {
    controls: {
        expanded: true,
    },
    actions: { argTypesRegex: "^on.*" },
};

export const decorators = [decorator];
