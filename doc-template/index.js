import { html, css, toGroups } from "./utils";
import getContentHeader from "./header";
import getContentAside from "./aside";
import style from "./style";

let getContentStyle = theme => css`
  :root {
    --link-color: #0070f3;
    --aside-width: 280px;
    --aside-background: #f7fafc;
    --aside-unselect: rgba(60, 65, 86, 0.5);
    --aside-select: #5a49ed;
    --aside-title: #404049;
    --aside-text: #404049;
    --split-border: rgba(60, 65, 86, 0.1);
    --text-color: #404040;
    --title-font: "Didact Gothic", sans-serif;
    --text-font: "Proza Libre", sans-serif;
    --header-height: 60px;
    --content-code-color: deeppink;
    --content-background: #f0f4f7;
    --content-header-background: #232329;
    --content-header-color: white;
  }
  ${style}
`;

export function template({ files, content, base: rootBase, meta, config }) {
  let groups = toGroups(files, "Components");

  return html`
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Didact+Gothic|Proza+Libre:400,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/@atomico/web-components-to-markdown/doc-show-html.js?module"
        ></script>
      </head>
      <body>
        <style>
          ${getContentStyle()}
        </style>
        <main>
          <header class="header">
            ${getContentHeader(config)}
          </header>
          <section class="wrapper">
            <input type="checkbox" id="aside-toggle" />
            <aside class="aside">
              <div class="aside-scroll">
                ${getContentAside(groups, rootBase)}
              </div>
              <label for="aside-toggle">
                <svg
                  width="50%"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 384"
                >
                  <path
                    d="M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z"
                  />
                </svg>
              </label>
            </aside>
            <article class="content">
              <div class="content-markdown">
                ${content}
              </div>
            </article>
          </section>
        </main>
        <script
          type="module"
          src="https://unpkg.com/@atomico/web-components-to-markdown/doc-props.js?module"
        ></script>
      </body>
    </html>
  `;
}

/**
 * allows to change the behavior of the html tags inside the markdown
 * {@link https://marked.js.org/#/README.md#README.md}
 */
export let nodeTypes = {
  highlight(code, type) {
    return code;
  },
  code(code, type) {
    return `<doc-code code='${code}' type="${type}"></doc-code>`;
  }
};
