import styled from "styled-components";

export const StyledCurrentDate = styled.span`
  color: #989696;
  font-size: 14px;
  grid-column: span 2;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column: span 1;
    justify-self: center;
  }
`;
