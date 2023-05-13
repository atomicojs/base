import { Component1 } from "@atomico/component-1";
import { define } from "@atomico/storybook";

export default {
    title: "components/component-1",
    ...define(
        Component1,
        { // Optional
            argTypes: {
                color: {
                    description: "Description..."
                }
            }
        }
)
};

export const Story = (props) =><Component1 {...props}>Atomico!</Component1>;