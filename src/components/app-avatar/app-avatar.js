import { h, customElement } from "atomico";
import style from "./app-avatar.css";

function AppAvatar({
  firstTitle,
  lastTitle,
  src,
  firstTitleColor,
  lastTitleColor,
}) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="c-avatar">
        <img class="c-avatar_img" src={src} alt={firstTitle} />
        <div class="c-avatar_titles">
          <strong
            class="c-avatar_firstTitle"
            style={{ color: firstTitleColor }}
          >
            {firstTitle}
          </strong>
          <div class="c-avatar_lastTitle" style={{ color: lastTitleColor }}>
            {lastTitle}
          </div>
        </div>
      </div>
    </host>
  );
}

AppAvatar.props = {
  src: String,
  firstTitle: String,
  lastTitle: String,
  firstTitleColor: String,
  lastTitleColor: String,
};

customElement("app-avatar", AppAvatar);
