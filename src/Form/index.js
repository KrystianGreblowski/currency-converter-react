import {
  StyledForm,
  Fieldset,
  Legend,
  Content,
  Label,
  Input,
  Select,
  Result,
  Container,
} from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";
import CurrentDate from "./CurrentDate";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].name);

  const toggleCurrencyName = () => {
    return currency === currencies[0].name
      ? currencies[1].name
      : currencies[0].name;
  };

  const toggleCurrencyRate = () => {
    currency === currencies[0].name
      ? setRate(currencies[1].rate)
      : setRate(currencies[0].rate);
  };

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);
    toggleCurrencyRate();
  };

  const calculateResult = () => {
    const result = (inputValue * rate).toFixed(2);
    return result > 0 ? result : "0.00";
  };

  const onFormSubmit = (event) => event.preventDefault();

  return (
    <ThemeProvider theme={theme}>
      <StyledForm onSubmit={onFormSubmit}>
        <Fieldset>
          <Legend>Przelicznik EUR/PLN</Legend>

          <Content>
            <CurrentDate />

            <Label>Kwota</Label>

            <Container>
              <Input
                as="input"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                type="number"
                placeholder="0.00"
              />

              <Select as="select" value={currency} onChange={onSelectCurrency}>
                {currencies.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Container>

            <Label>Kurs</Label>

            <Label>
              1 {currency} = {rate} {toggleCurrencyName()}
            </Label>

            <Label>Wynik</Label>

            <Result>
              {calculateResult()} {toggleCurrencyName()}
            </Result>
          </Content>
        </Fieldset>
      </StyledForm>
    </ThemeProvider>
  );
};

export default Form;
