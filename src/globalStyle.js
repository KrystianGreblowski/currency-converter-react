import { createGlobalStyle } from "styled-components";
import backgroundImage from "./background-image.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
