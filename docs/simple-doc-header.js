import { x, p } from './chunks/4ad3f165.js';

var style = ":host{width:100%;height:90px;display:flex;padding:20px 60px;box-sizing:border-box;justify-content:space-between;align-items:center;}@media (max-width: 768px){:host{padding:20px;}}.logo{width:150px;}";

function SimpleDocHeader({ logo, logoRedirect }) {
  return (
    p('host', { shadowDom: true,}
      , p('style', null, style)
      , p('div', { class: "logo",}
        , p('slot', { name: "logo",})
      )
      , p('div', { class: "socials",}
        , p('slot', { name: "socials",})
      )
    )
  );
}

SimpleDocHeader.props = {
  logo: String,
  logoRedirect: String,
};

x("simple-doc-header", SimpleDocHeader);
//# sourceMappingURL=simple-doc-header.js.map
