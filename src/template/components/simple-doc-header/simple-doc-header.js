import { h, customElement } from "atomico";
import style from "./simple-doc-header.css";

function SimpleDocHeader({ logo, logoRedirect }) {
    return (
        <host shadowDom>
            <style>{style}</style>
            <div class="logo">
                <slot name="logo"></slot>
            </div>
            <div class="socials">
                <slot name="socials"></slot>
            </div>
        </host>
    );
}

SimpleDocHeader.props = {
    logo: String,
    logoRedirect: String,
};

customElement("simple-doc-header", SimpleDocHeader);
