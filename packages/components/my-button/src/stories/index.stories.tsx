import { MyButton } from "@atomico/my-button";
import { define } from "@atomico/storybook";

export default {
    title: "components/my-button",
    ...define(MyButton, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <MyButton {...props}>Atomico!</MyButton>;
