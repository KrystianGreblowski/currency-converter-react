import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  max-width: ${({ theme }) => theme.applicationWidth.max}px;
  justify-self: center;
`;

export const Fieldset = styled.fieldset`
  background-color: #fcfbfb;
  color: #000;
  border: 1px solid #aaa;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 3px #808080;
`;

export const Legend = styled.legend`
  padding: 8px 15px;
  background-color: #eb3d3d;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px #7a1818;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 90px 300px;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 250px;
  }
`;

export const Label = styled.span`
  background-color: #d9d6d6;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px;
  box-shadow: 1px 1px 3px #706f6f;
  text-align: center;

  ${({ labelValue }) =>
    labelValue &&
    css`
      background-color: #eee;
    `}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-gap: 7px;
`;

export const Input = styled.input`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px;
  box-shadow: 1px 1px 3px #706f6f;
  text-align: center;
`;

export const Select = styled(Label)`
  background-color: #eee;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(110%);
  }
`;

export const Result = styled(Label)`
  background-color: #eb3d3d;
  color: #fff;
  box-shadow: 1px 1px 3px #7a1818;
  border: none;
`;

export const Loading = styled.p`
  max-width: ${({ theme }) => theme.applicationWidth.max}px;
  padding: 20px;
  text-align: center;
  font-size: 17px;
  color: #000;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: ${({ theme }) => theme.applicationWidth.mobileMax}px;
  }
`;

export const Error = styled(Loading)`
  color: #ff0000;
`;

export const RatesDate = styled.span`
  font-size: 12px;
  color: red;
  text-align: center;
  grid-column: span 2;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column: span 1;
    justify-self: center;
  }
`;
