import { StyledHeader, Title } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../Form/theme";

const Header = () => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <Title>Kalkulator waluty Euro</Title>
    </StyledHeader>
  </ThemeProvider>
);

export default Header;
