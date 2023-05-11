import { MyComponent } from "@atomico/my-component";
import { define } from "@atomico/storybook";

const { args, argTypes } = define(MyComponent);

export default {
    title: "MyComponent",
    argTypes,
    args,
};

export const Default = () => (
    <div>
        <h1>?</h1>
        <MyComponent></MyComponent>
    </div>
);
