import "./disable-hmr";
import { decorator } from "@atomico/storybook";

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
};

export const decorators = [decorator];
