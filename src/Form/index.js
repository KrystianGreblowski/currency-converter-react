import "./style.css";
import { useState } from "react";

const Form = () => {
  const currencies = [
    {
      id: 1,
      currency: "EUR",
      rate: 4.5099,
    },
    {
      id: 2,
      currency: "PLN",
      rate: 0.2211,
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].currency);

  const calculateResult = (inputValue, rate) => (inputValue * rate).toFixed(2);

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);

    currency === currencies[0].currency
      ? setRate(currencies[1].rate)
      : setRate(currencies[0].rate);
  };

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik EUR/PLN</legend>

        <div className="form__body">
          <span className="form__field">Kwota</span>

          <div className="form__inputValue">
            <input
              className="form__field form__field--input"
              placeholder="0.00"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
              type="number"
            />

            <select
              className="form__field form__field--select"
              value={currency}
              onChange={onSelectCurrency}
            >
              {currencies.map(({ id, currency }) => (
                <option key={id} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <span className="form__field">Kurs</span>
          <span className="form__field"></span>

          <span className="form__field">Wynik</span>
          <span className="form__field form__field--result">
            {calculateResult(inputValue, rate)}{" "}
            {currency === currencies[0].currency
              ? currencies[1].currency
              : currencies[0].currency}
          </span>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
