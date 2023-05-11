import { define } from "@atomico/storybook";
import { MyComponent } from "@atomico/my-component";

export default {
    title: "MyComponent",
    ...define(MyComponent, {
        argTypes: {
            myProp: { description: "My prop!" },
        },
    }),
};

export const Default = () => <MyComponent></MyComponent>;
