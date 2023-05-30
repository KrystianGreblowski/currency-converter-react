import "./style.css";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const currencies = [
    {
      id: 1,
      currency: "EUR",
      rate: 0.2211,
    },
    {
      id: 2,
      currency: "PLN",
      rate: 4.5559,
    },
  ];

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
            />

            <select className="form__field form__field--select">
              {currencies.map(({ id, currency }) => (
                <option id={id}>{currency}</option>
              ))}
            </select>
          </div>

          <span className="form__field">Kurs</span>
          <span className="form__field"></span>

          <span className="form__field">Wynik</span>
          <span className="form__field form__field--result">0.00 PLN</span>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
