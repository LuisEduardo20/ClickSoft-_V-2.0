import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #f2eab7;
    --red: #c90a02;
    --brow: #752e2b;
    --gray: #171f25;
    --black: #090f13;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Poppins, sans-serif, ubuntu, monospace;
  }

  button {
    cursor: pointer;
  }
`;
