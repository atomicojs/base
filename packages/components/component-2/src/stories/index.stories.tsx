import { Component2 } from "@atomico/component-2";
import { define } from "@atomico/storybook";

export default {
    title: "components/component-2",
    tags: ["autodocs"],
    ...define(Component2, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <Component2 {...props}>Atomico!</Component2>;
