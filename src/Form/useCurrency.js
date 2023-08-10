import { useState, useEffect } from "react";

export const useCurrency = () => {
  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const loadingData = () => {
      fetch("https://api.exchangerate.host/latest?base=PLN")
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((currencyRates) => {
          setRatesData(
            (ratesData) => (ratesData = { ...currencyRates, state: "done" })
          );

          setCurrency(
            (currency) => (currency = Object.keys(currencyRates.rates)[0])
          );
          setRate(
            (rate) => (rate = Object.values(currencyRates.rates)[0].toFixed(4))
          );
        })
        .catch((error) =>
          setRatesData((ratesData) => (ratesData = { state: "error" }))
        );
    };

    setTimeout(loadingData, 1500);
  }, []);

  const onFormSubmit = (event) => event.preventDefault();

  const setCurrencyRate = (currencyShortName) => {
    const index = Object.keys(ratesData.rates).findIndex(
      (element) => element === currencyShortName
    );

    setRate(Object.values(ratesData.rates)[index].toFixed(4));
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
    ratesData,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
  };
};
