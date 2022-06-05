import { c, css } from "atomico";
import { Brand } from "@component/atomico-brand";
import { Hello } from "@component/atomico-hello";

function app() {
    return (
        <host shadowDom>
            <Hello>
                <div class="message">
                    <Brand color="var(--theme-color)"></Brand>
                    <div class="message_text">
                        <slot></slot>
                    </div>
                </div>
            </Hello>
        </host>
    );
}

app.styles = css`
    .message {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        max-width: 45rem;
    }

    .message_text {
        padding-left: 1rem;
        margin-left: 1rem;
        color: var(--theme-color);
        border-left: 0.2rem solid var(--theme-color);
    }

    @media (max-width: 45rem) {
        .message {
            flex-flow: column nowrap;
        }
    }
`;

export const App = c(app);

customElements.define("my-app", App);
