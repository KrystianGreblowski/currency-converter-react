import { useState } from "react";
import { currencies } from "./currencies";

export const useCurrency = () => {
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencies[0].rate);
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onFormSubmit = (event) => event.preventDefault();

  const setCurrencyRate = (currencyName) => {
    const index = currencies.findIndex(
      ({ shortName }) => shortName === currencyName
    );
    setRate(currencies[index].rate);
  };

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);
    setCurrencyRate(target.value);
  };

  const calculateResult = () => {
    const result = (inputValue * rate).toFixed(2);
    return result > 0 ? result : "0.00";
  };

  return {
    inputValue,
    rate,
    currency,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
  };
};
