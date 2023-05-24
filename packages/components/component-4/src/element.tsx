import { c, css } from "atomico";

function component4() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

component4.props = {
    myProp: String
};

component4.styles = css`
    :host {
        display: block;
    }
`;

export const Component4 = c(component4);