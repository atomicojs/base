import { c, css } from "atomico";

function component3() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

component3.props = {
    myProp: String
};

component3.styles = css`
    :host {
        display: block;
    }
`;

export const Component3 = c(component3);