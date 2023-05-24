import { Component4 } from "@atomico/component-4";
import { define } from "@atomico/storybook";

export default {
    title: "components/component-4",
    ...define(Component4, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <Component4 {...props}>Atomico!</Component4>;
