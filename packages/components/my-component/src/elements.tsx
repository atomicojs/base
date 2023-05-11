import { c, css } from "atomico";

function myComponent() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

myComponent.props = {
    myProp: String
};

myComponent.styles = css`
    :host {
        display: block;
    }
`;

export const MyComponent = c(myComponent);