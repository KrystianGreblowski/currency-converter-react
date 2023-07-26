import {
  StyledForm,
  Fieldset,
  Legend,
  Content,
  Label,
  Input,
  Select,
  Result,
} from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";
import CurrentDate from "./CurrentDate";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const setCurrencyRate = (currencyName) => {
    const index = currencies.findIndex(
      ({ shortName }) => shortName === currencyName
    );
    setRate(currencies[index].rate);
  };

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);
    setCurrencyRate(target.value);
  };

  const calculateResult = () => {
    const result = (inputValue * rate).toFixed(2);
    return result > 0 ? result : "0.00";
  };

  const onFormSubmit = (event) => event.preventDefault();

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>

        <Content>
          <CurrentDate />

          <Label>Waluta</Label>

          <Select as="select" value={currency} onChange={onSelectCurrency}>
            {currencies.map(({ id, name, shortName }) => (
              <option key={id} value={shortName}>
                {name}
              </option>
            ))}
          </Select>

          <Label>Kwota</Label>

          <Input
            as="input"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            type="number"
            placeholder="0.00"
          />

          <Label>Kurs</Label>

          <Label>
            1 {currency} = {rate} PLN
          </Label>

          <Label>Wynik</Label>

          <Result>{calculateResult()} PLN</Result>
        </Content>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
