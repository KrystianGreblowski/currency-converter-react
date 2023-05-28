import "./style.css";
import Legend from "./Legend";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <Legend title="Przelicznik EUR/PLN" />
      <div className="form__body">
        <span className="form__field">Kwota</span>
        <div className="form__inputValue">
          <input
            className="form__field form__field--input"
            type="number"
            name="inputAmount"
            placeholder="0.00"
          />
          <select className="form__field form__field--select" name="currency">
            <option value="eur" selected>
              EUR
            </option>
            <option value="pln">PLN</option>
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

export default Form;
