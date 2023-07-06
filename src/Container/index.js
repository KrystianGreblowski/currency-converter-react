import styled from "styled-components";

const StyledContainer = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  padding: 5px;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
