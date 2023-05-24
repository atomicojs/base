import { c, css } from "atomico";

function component2() {
    return (
        <host shadowDom>
            <h1>
                Hi <slot />
            </h1>
        </host>
    );
}

component2.props = {
    myProp: {
        type: String,
        value: "Atomico",
    },
};

component2.styles = css`
    :host {
        display: block;
    }
`;

export const Component2 = c(component2);
