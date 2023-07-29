import { useState } from "react";
import { useRatesData } from "./useRatesData";

export const useCurrency = () => {
  const { currencyName, currencyRate } = useRatesData();
  const [inputValue, setInputValue] = useState("");
  const [rate, setRate] = useState(currencyRate[0]);
  const [currency, setCurrency] = useState(currencyName[0]);

  const onFormSubmit = (event) => event.preventDefault();

  const setCurrencyRate = (currencyShortName) => {
    const index = currencyName.findIndex(
      (element) => element === currencyShortName
    );

    setRate(currencyRate[index]);
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
    currencyName,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
  };
};
