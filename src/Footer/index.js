import { StyledFooter } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../Form/theme";

const Footer = () => (
  <ThemeProvider theme={theme}>
    <StyledFooter>Copyright © 2023 Krystian Gręblowski</StyledFooter>
  </ThemeProvider>
);

export default Footer;
