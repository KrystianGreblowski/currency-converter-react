import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrency = () => {
  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [ratesData, setRatesData] = useState({ state: "loading" });
  const [date, setDate] = useState("");

  useEffect(() => {
    const apiAddress =
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_mO3iCdyRcyM24pLZRUYFZv8syTVLuRks2LS1CFIO&base_currency=PLN";

    const getCurrenciesDataFromApi = async () => {
      const response = await axios.get(apiAddress);
      if (response.status !== 200) {
        throw new Error();
      }

      return response.data;
    };

    const fetchRates = async () => {
      try {
        const response = await getCurrenciesDataFromApi();

        setRatesData(
          (ratesData) => (ratesData = { ...response, state: "done" })
        );

        setCurrency(() => Object.keys(response.data)[0]);
        setRate(() => Object.values(response.data)[0].value.toFixed(4));
        setDate(response.meta.last_updated_at);
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 1000);
  }, []);

  const onFormSubmit = (event) => event.preventDefault();

  const checkInputValue = (inputValue) => {
    if (inputValue < 0) return (inputValue = "");

    return inputValue;
  };

  const setCurrencyRate = (currencyShortName) => {
    const index = Object.keys(ratesData.data).findIndex(
      (element) => element === currencyShortName
    );

    setRate(Object.values(ratesData.data)[index].value.toFixed(4));
  };

  const onSelectCurrency = ({ target }) => {
    setCurrency(target.value);
    setCurrencyRate(target.value);
  };

  const calculateResult = () => {
    const result = (inputValue * rate).toFixed(2);
    return result > 0 ? result : "0.00";
  };

  const getExchangeRateDate = () => {
    const exchangeRateDate = new Date(date).toLocaleDateString("pl");

    return exchangeRateDate;
  };

  return {
    inputValue,
    checkInputValue,
    rate,
    currency,
    ratesData,
    setInputValue,
    onFormSubmit,
    onSelectCurrency,
    calculateResult,
    getExchangeRateDate,
  };
};
