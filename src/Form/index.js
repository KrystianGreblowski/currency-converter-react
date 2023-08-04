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
  Loading,
} from "./styled";
import CurrentDate from "./CurrentDate";
import { useCurrency } from "./useCurrency";

const Form = () => {
  const {
    inputValue,
    rate,
    currency,
    ratesData,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
  } = useCurrency();

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>

        {ratesData.state === "loading" ? (
          <Loading>Ładowanie strony</Loading>
        ) : (
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
              {Object.keys(ratesData.rates).map((currencyShortName, index) => (
                <option key={index} value={currencyShortName}>
                  {currencyShortName}
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
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
