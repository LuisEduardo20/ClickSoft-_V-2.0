import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f8f9ff;
    --gray-400: #e1e1e1;
    --gray-800: #959098;
    --purple: #9c4870;
    --black: #2f2531;
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
