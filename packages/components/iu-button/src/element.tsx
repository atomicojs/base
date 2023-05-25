import { c, css, Props } from "atomico";

function iuButton({ color }: Props<typeof iuButton>) {
    return (
        <host shadowDom>
            <slot />
            {color && <style>{`:host{--color: ${color}}`}</style>}
        </host>
    );
}

iuButton.props = {
    color: {
        type: String,
        value: "#d600ff",
    },
};

iuButton.styles = css`
    :host {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        background: var(--color);
        color: white;
        border-radius: 100px;
        cursor: pointer;
    }
`;

export const IuButton = c(iuButton);
