import "./style.css";
import { useState } from "react";
import { currencies } from "./currencies";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].currencyName);

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);

    currency === currencies[0].currencyName
      ? setRate(currencies[1].rate)
      : setRate(currencies[0].rate);
  };

  const calculateResult = () => (inputValue * rate).toFixed(2);

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
              {currencies.map(({ id, currencyName }) => (
                <option key={id} value={currencyName}>
                  {currencyName}
                </option>
              ))}
            </select>
          </div>

          <span className="form__field">Kurs</span>

          <span className="form__field">
            1 {currency} = {rate} {currency === "EUR" ? "PLN" : "EUR"}
          </span>

          <span className="form__field">Wynik</span>

          <span className="form__field form__field--result">
            {calculateResult()}{" "}
            {currency === currencies[0].currencyName
              ? currencies[1].currencyName
              : currencies[0].currencyName}
          </span>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
