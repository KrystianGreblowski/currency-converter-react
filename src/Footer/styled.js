import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.font};
  border-radius: 3px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.shadow};
  padding: 8px;
  font-size: 15px;
  text-align: center;
`;
