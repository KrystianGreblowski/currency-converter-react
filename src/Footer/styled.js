import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 3px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.shadowColor};
  padding: 8px;
  font-size: 15px;
  text-align: center;
`;
