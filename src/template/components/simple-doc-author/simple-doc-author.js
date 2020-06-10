import { h, customElement } from "atomico";
import style from "./simple-doc-author.css";

function SimpleDocAuthor({ avatar, label, user, link, labelColor, userColor }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <img class="img" src={avatar}></img>
      <div class="content">
        <header class="header">
          <div class="title">
            <h5
              class="title-label"
              style={labelColor ? `color:${labelColor}` : ""}
            >
              {label}
            </h5>
            <h5
              class="title-user"
              style={userColor ? `color:${userColor}` : ""}
            >
              {user}
            </h5>
          </div>
        </header>
        <slot></slot>
      </div>
    </host>
  );
}

SimpleDocAuthor.props = {
  avatar: String,
  label: String,
  labelColor: String,
  user: String,
  userColor: String,
  link: String,
};

customElement("simple-doc-author", SimpleDocAuthor);
