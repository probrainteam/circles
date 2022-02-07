import { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    // css custom property : theme

    &.dark {
    }

    &.light {
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
