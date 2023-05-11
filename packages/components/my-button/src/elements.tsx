import { c, css } from "atomico";

function myButton() {
    return (
        <host shadowDom>
            <h1>Hi <slot/></h1>
        </host>
    );
}

myButton.props = {
    myProp: String
};

myButton.styles = css`
    :host {
        display: block;
    }
`;

export const MyButton = c(myButton);