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

          <Label>Kwota</Label>

          <Container>
            <Input
              as="input"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
              type="number"
              placeholder="0.00"
            />
            <Label>PLN</Label>
          </Container>

          <Label>Waluta</Label>

          <Select as="select" value={currency} onChange={onSelectCurrency}>
            {currencies.map(({ id, name, shortName }) => (
              <option key={id} value={shortName}>
                {name}
              </option>
            ))}
          </Select>

          <Label>Kurs</Label>

          <Label>
            1 PLN = {rate} {currency}
          </Label>

          <Label>Wynik</Label>

          <Container>
            <Result>{calculateResult()}</Result>
            <Result>{currency}</Result>
          </Container>
        </Content>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
