import { IuButton } from "@atomico/iu-button";
import { define } from "@atomico/storybook";

export default {
    title: "components/iu-button",
    ...define(IuButton, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <IuButton {...props}>button</IuButton>;
