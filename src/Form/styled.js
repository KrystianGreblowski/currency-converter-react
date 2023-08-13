import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: ${({ theme }) => theme.applicationWidth.max}px;
  justify-self: center;
`;

export const Fieldset = styled.fieldset`
  background-color: ${({ theme }) => theme.color.fieldset.background};
  color: ${({ theme }) => theme.color.fieldset.font};
  border: 1px solid ${({ theme }) => theme.color.fieldset.border};
  padding: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.fieldset.shadow};
`;

export const Legend = styled.legend`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.color.legend.background};
  color: ${({ theme }) => theme.color.legend.font};
  font-size: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.legend.shadow};
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
  background-color: ${({ theme }) => theme.color.label.background};
  color: ${({ theme }) => theme.color.label.font};
  border: 1px solid ${({ theme }) => theme.color.label.border};
  border-radius: 3px;
  padding: 6px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.label.shadow};
  text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-gap: 7px;
`;

export const Input = styled(Label)`
  background-color: ${({ theme }) => theme.color.input.background};
  color: ${({ theme }) => theme.color.input.font};
`;

export const Select = styled(Label)`
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(${({ theme }) => theme.brightness}%);
  }

  &:active {
    filter: brightness(${({ theme }) => theme.brightness}%);
  }
`;

export const Result = styled(Label)`
  background-color: ${({ theme }) => theme.color.result.background};
  color: ${({ theme }) => theme.color.result.font};
  box-shadow: 1px 1px 3px ${({ theme }) => theme.color.result.shadow};
  border: none;
`;

export const Loading = styled.p`
  max-width: ${({ theme }) => theme.applicationWidth.max}px;
  padding: 20px;
  text-align: center;
  font-size: 17px;
  color: ${({ theme }) => theme.color.loading.font};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: ${({ theme }) => theme.applicationWidth.mobileMax}px;
  }
`;

export const Error = styled(Loading)`
  color: ${({ theme }) => theme.color.error.font};
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
