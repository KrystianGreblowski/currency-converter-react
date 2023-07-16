import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  justify-self: center;
`;

export const Fieldset = styled.fieldset`
  background-color: #fcfbfb;
  border: 1px solid #aaa;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px hsl(0, 0%, 50%);
`;

export const Legend = styled.legend`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.font};
  font-size: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.shadow};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;

export const Label = styled.span`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px;
  box-shadow: 1px 1px 3px #706f6f;
  text-align: center;
  background-color: #eee;
`;

export const Input = styled(Label)`
  background-color: white;
`;

export const Select = styled(Label)`
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
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.font};
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.shadow};
  border: none;
`;
