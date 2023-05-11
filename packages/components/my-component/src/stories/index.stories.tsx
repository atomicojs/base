import { MyComponent } from "@atomico/my-component";
import { define } from "@atomico/storybook";

export default {
    title: "components/my-component",
    ...define(
        MyComponent,
        { // Optional
            argTypes: {
                color: {
                    description: "Description..."
                }
            }
        }
)
};

export const Story = (props) =><MyComponent {...props}>Atomico!</MyComponent>;