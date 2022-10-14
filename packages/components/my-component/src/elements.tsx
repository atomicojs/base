import { c, css } from "atomico";

function myComponent() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

myComponent.props = {
    myProp: String,
};

myComponent.styles = css`
    :host {
        display: block;
    }
`;

export const MyComponent = c(myComponent);
