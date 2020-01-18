import { css } from "../utils";

export default css`
  .content {
    height: 100%;
    flex: 0%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .content.--with-header {
    background: var(--content-background);
  }

  .content-markdown {
    width: 90%;
    padding: 3rem 5%;
    box-sizing: border-box;
    margin: auto;
    background: white;
    content: var(--content-markdown-color);
    font-size: 18px;
    line-height: 1.5em;
  }

  .content-header {
    width: 100%;
    min-height: 200px;
    padding: 50px 10%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    background: var(--content-header-background);
    color: var(--content-header-color, white);
  }

  .content-header p {
    font-size: 16px;
    margin: 0px;
    opacity: 0.6;
  }

  .content-header + .content-markdown {
    margin-top: -25px;
    margin-bottom: 50px;
  }

  .content-markdown code {
    color: var(--aside-select);
    font-family: monospace;
    font-size: 0.9em;
    font-weight: bold;
    display: inline-block;
  }
  .content-markdown code:before,
  .content-markdown code:after {
    content: "\`";
  }

  .content-markdown img {
    max-width: 100%;
  }

  .content-markdown table {
    width: 100%;
    border-spacing: 0px;
    margin: 10px auto;
  }

  .content-markdown thead {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: left;
  }

  .content-markdown thead th {
    padding: 5px 1rem;
  }

  .content-markdown tbody td {
    font-size: 14px;
    padding: 10px 1rem;
  }

  .content-markdown thead th,
  .content-markdown tbody td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .content-markdown blockquote {
    padding: 1px 0px 1px 1rem;
    margin: 10px 0px;
    border-left: 2px solid currentColor;
    font-size: 0.85em;
  }
`;
