import {
  StyledForm,
  Fieldset,
  Legend,
  Content,
  Label,
  Container,
  Input,
  Select,
  Result,
} from "./styled";
import CurrentDate from "./CurrentDate";
import { currencies } from "./currencies";
import { useCurrency } from "./useCurrency";

const Form = () => {
  const {
    inputValue,
    rate,
    currency,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
  } = useCurrency();

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

          <Container>
            <Input
              as="input"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
              type="number"
              placeholder="0.00"
            />

            <Label>{currency}</Label>
          </Container>

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
