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
  Error,
  RatesDate,
} from "./styled";
import CurrentDate from "./CurrentDate";
import { useCurrency } from "./useCurrency";

const Form = () => {
  const {
    inputValue,
    rate,
    currency,
    ratesData,
    checkInputValue,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
    getExchangeRateDate,
  } = useCurrency();

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>

        {ratesData.state === "loading" ? (
          <Loading>
            Trwa ładowanie danych z Europejskiego Banku Centralnego.
          </Loading>
        ) : ratesData.state === "error" ? (
          <Error>
            Coś poszło nie tak. Sprawdź czy masz połączenie z Internetem. Jeśli
            tak, to wina leży po naszej stronie. Spróbuj później.
          </Error>
        ) : (
          <Content>
            <CurrentDate />

            <Label>Waluta</Label>

            <Select
              as="select"
              labelValue
              value={currency}
              onChange={onSelectCurrency}
            >
              {Object.keys(ratesData.data).map((currencyShortName, index) => (
                <option key={index} value={currencyShortName}>
                  {currencyShortName}
                </option>
              ))}
            </Select>

            <Label>Kurs</Label>

            <Label labelValue>
              1 PLN = {rate} {currency}
            </Label>

            <Label>Kwota</Label>

            <Container>
              <Input
                value={checkInputValue(inputValue)}
                onChange={({ target }) => setInputValue(target.value)}
                type="number"
                min="0.00"
                step="0.01"
                placeholder="0.00"
              />
              <Label labelValue>PLN</Label>
            </Container>

            <Label>Wynik</Label>

            <Container>
              <Result>{calculateResult()}</Result>
              <Result>{currency}</Result>
            </Container>

            <RatesDate>
              Kursy walut pobierane są z Europejskiego Banku Centralnego.
              Aktualne na dzień: {getExchangeRateDate()}
            </RatesDate>
          </Content>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
