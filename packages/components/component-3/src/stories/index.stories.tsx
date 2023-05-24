import { Component3 } from "@atomico/component-3";
import { define } from "@atomico/storybook";

export default {
    title: "components/component-3",
    tags: ["autodocs"],
    ...define(Component3, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <Component3 {...props}>Atomico!</Component3>;
