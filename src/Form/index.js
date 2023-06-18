import "./style.css";
import { useState, useEffect } from "react";
import { currencies } from "./currencies";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].name);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate((currentDate) => (currentDate = new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const showCurrentDate = () =>
    currentDate.toLocaleDateString("pl", {
      month: "long",
      weekday: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

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

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik EUR/PLN</legend>

        <div className="form__body">
          <span className="form__date">Dzisiaj jest {showCurrentDate()}</span>

          <span className="form__field">Kwota</span>

          <div className="form__inputValue">
            <input
              className="form__field form__field--input"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
              type="number"
              placeholder="0.00"
            />

            <select
              className="form__field form__field--select"
              value={currency}
              onChange={onSelectCurrency}
            >
              {currencies.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <span className="form__field">Kurs</span>

          <span className="form__field">
            1 {currency} = {rate} {toggleCurrencyName()}
          </span>

          <span className="form__field">Wynik</span>

          <span className="form__field form__field--result">
            {calculateResult()} {toggleCurrencyName()}
          </span>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
