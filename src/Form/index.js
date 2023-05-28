import "./style.css";
import Legend from "./Legend";
import Label from "./Label";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";
import Input from "./Input";
import SelectCurrency from "./SelectCurrency";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <Legend title="Przelicznik EUR/PLN" />

      <div className="form__body">
        <Label title="Kwota" />

        <div className="form__inputValue">
          <Input />
          <SelectCurrency />
        </div>

        <Label title="Kurs" />
        <ExchangeRate eurRate="4.8991" plnRate="0.2333" />
        <Label title="Wynik" />
        <Result />
      </div>
    </fieldset>
  </form>
);

export default Form;
