import { css } from "../utils";
import aside from "./aside";
import content from "./content";

export default css`
  html,
  body {
    margin: 0px;
    padding: 0px;
    color: var(--title-color);
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--text-font);
  }

  main {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    font-family: var(--title-font);
    line-height: 1.2em;
    margin: 3rem 0px 1rem;
  }

  h1 {
    font-size: 3.4rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }

  a {
    color: var(--link-color);
  }

  doc-show-html,
  doc-code,
  doc-props {
    border-radius: 8px;
    margin: 10px auto;
  }

  .header {
    width: 100%;
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    border-bottom: 1px solid var(--split-border);
    box-sizing: border-box;
  }

  .wrapper {
    width: 100%;
    height: calc(100% - var(--header-height));
    display: flex;
    flex-flow: row wrap;
    overflow: hidden;
  }

  ${aside}

  ${content}

  #aside-toggle {
    display: none;
  }

  .aside {
    transition: 0.5s ease all;
  }

  [for="aside-toggle"] {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 100%;
    top: 0px;
    border-right: 1px solid var(--split-border);
    border-bottom: 1px solid var(--split-border);
    transition: 0.3s ease all;
    background: var(--aside-background);
  }

  #aside-toggle:checked ~ .aside {
    margin-left: calc(var(--aside-width) * -1);
  }

  @media (max-width: 720px) {
    #aside-toggle ~ .aside {
      margin-left: calc(var(--aside-width) * -1);
    }
    #aside-toggle:checked ~ .aside {
      margin-left: 0px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --aside-width: 100vw;
    }
    .header {
      padding: 0px 1rem;
    }
    #aside-toggle:checked ~ .aside [for="aside-toggle"] {
      left: calc(100% - 40px);
      transform: rotate(90deg);
    }
  }
`;
