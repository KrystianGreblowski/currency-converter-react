import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.font};
  border-radius: 3px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.shadow};
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  margin: 0;
  padding: 8px;
`;
