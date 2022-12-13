import { MyComponent } from "./define";
import { define } from "@atomico/storybook";

const { args, argTypes } = define(MyComponent);

export default {
    title: "MyComponent",
    argTypes,
    args,
};

export const Default = () => <MyComponent></MyComponent>;
