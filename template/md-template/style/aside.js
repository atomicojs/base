import { css } from "../utils";

export default css`
  .aside {
    width: var(--aside-width);
    height: 100%;
    background: var(--aside-background);
    border-right: 1px solid var(--split-border);
    box-sizing: border-box;
    padding: 40px 20px;
    position: relative;
  }

  .aside-scroll {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .aside-ul {
    list-style-type: none;
    font-family: var(--title-font);
    padding-left: 1.5rem;
    color: var(--aside-text);
  }
  .aside-title {
    margin: 0.5rem 0px;
    color: var(--aside-title);
    display: inline-block;
  }

  .aside-ul .aside-ul {
    padding-left: 0px;
    margin-left: 10px;
    border-left: 1px solid var(--aside-unselect);
  }

  .aside-ul .aside-ul li {
    padding: 4px 0px 4px 10px;
    border-left: 2px solid transparent;
    margin-left: -1.5px;
    position: relative;
  }
  .aside-ul a {
    color: unset;
  }

  .aside-ul .aside-ul li.--select {
    border-left: 2px solid var(--aside-select);
  }
  .aside-ul .aside-ul li.--select:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 2px solid var(--aside-select);
    background: var(--aside-background);
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }
`;
