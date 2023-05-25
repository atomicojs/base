import { c, css } from "atomico";

function component1() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

component1.props = {
    myProp: String
};

component1.styles = css`
    :host {
        display: block;
    }
`;

export const Component1 = c(component1);