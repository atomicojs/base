import { html } from "./utils";

export default (groups, rootBase) =>
  groups.map(([group, files]) => {
    return !files.length
      ? ""
      : html`
          <ul class="aside-ul">
            <li>
              ${group
                ? html`
                    <strong class="aside-title">${group}</strong>
                  `
                : ""}
              <ul class="aside-ul">
                ${files.map(({ base, meta }) => {
                  return html`
                    <li class="${base == rootBase ? "--select" : ""}">
                      <a href=${base}
                        >${meta.title || base.replace(/\.\w+$/g, "")}</a
                      >
                    </li>
                  `;
                })}
              </ul>
            </li>
          </ul>
        `;
  });
