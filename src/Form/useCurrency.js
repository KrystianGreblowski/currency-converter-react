import { useState, useEffect } from "react";

export const useCurrency = () => {
  const [inputValue, setInputValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [ratesData, setRatesData] = useState({ state: "loading" });

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://api.exchangerate.host/latest?base=PLN"
  //     );
  //     const currencyRates = await response.json();
  //     setRatesData((ratesData) => (ratesData = { ...currencyRates }));
  //     console.log(currencyRates);
  //   })();

  // fetch("https://api.exchangerate.host/latest?base=PLN")
  //   .then((response) => response.json())
  //   .then((currencyRates) => {
  //     setRatesData((ratesData) => (ratesData = { ...currencyRates }));
  //   });
  // }, []);

  useEffect(() => {
    const loadingData = () => {
      const currencyRates = JSON.parse(
        '{"motd":{"msg":"If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.","url":"https://exchangerate.host/#/donate"},"success":true,"base":"PLN","date":"2023-07-29","rates":{"AED":0.917167,"AFN":21.25537,"ALL":23.532186,"AMD":96.458513,"ANG":0.448253,"AOA":205.893171,"ARS":68.320284,"AUD":0.375513,"AWG":0.449657,"AZN":0.424542,"BAM":0.442577,"BBD":0.499352,"BDT":26.987587,"BGN":0.442616,"BHD":0.094336,"BIF":704.121929,"BMD":0.249757,"BND":0.331265,"BOB":1.718745,"BRL":1.181333,"BSD":0.24974,"BTC":0.000009,"BTN":20.44784,"BWP":3.251072,"BYN":0.627854,"BZD":0.501467,"CAD":0.330903,"CDF":617.00573,"CHF":0.216387,"CLF":0.007633,"CLP":206.865641,"CNH":1.786971,"CNY":1.78491,"COP":983.810978,"CRC":134.349509,"CUC":0.249825,"CUP":6.428864,"CVE":24.94363,"CZK":5.435908,"DJF":44.279488,"DKK":1.68892,"DOP":13.957699,"DZD":33.896689,"EGP":7.714597,"ERN":3.745114,"ETB":13.669155,"EUR":0.226434,"FJD":0.554,"FKP":0.194513,"GBP":0.194536,"GEL":0.64666,"GGP":0.194516,"GHS":2.832765,"GIP":0.194501,"GMD":14.896168,"GNF":2139.54695,"GTQ":1.953486,"GYD":52.070217,"HKD":1.947286,"HNL":6.120262,"HRK":1.707543,"HTG":34.070493,"HUF":87.112422,"IDR":3771.677602,"ILS":0.924704,"IMP":0.194532,"INR":20.539141,"IQD":325.773758,"IRR":10548.247621,"ISK":32.838289,"JEP":0.194541,"JMD":38.422757,"JOD":0.17717,"JPY":35.238661,"KES":35.552208,"KGS":21.880131,"KHR":1026.565665,"KMF":111.424568,"KPW":224.696619,"KRW":317.915506,"KWD":0.076869,"KYD":0.207357,"KZT":110.748615,"LAK":4811.022306,"LBP":3732.782388,"LKR":82.075787,"LRD":46.287608,"LSL":4.404101,"LYD":1.184395,"MAD":2.421959,"MDL":4.394542,"MGA":1121.117087,"MKD":13.938514,"MMK":522.240193,"MNT":861.336484,"MOP":1.99786,"MRU":9.499797,"MUR":11.436908,"MVR":3.832429,"MWK":262.138322,"MXN":4.166787,"MYR":1.136954,"MZN":15.909947,"NAD":4.401541,"NGN":193.665364,"NIO":9.098586,"NOK":2.546123,"NPR":32.716347,"NZD":0.405184,"OMR":0.096238,"PAB":0.249785,"PEN":0.895141,"PGK":0.89222,"PHP":13.710866,"PKR":71.231214,"PLN":1,"PYG":1811.531191,"QAR":0.90589,"RON":1.118007,"RSD":26.582454,"RUB":22.983924,"RWF":293.853052,"SAR":0.93658,"SBD":2.084226,"SCR":3.382071,"SDG":150.172107,"SEK":2.633606,"SGD":0.332429,"SHP":0.194563,"SLL":5235.301216,"SOS":141.633646,"SRD":9.594009,"SSP":32.521368,"STD":5562.933514,"STN":5.542549,"SVC":2.176186,"SYP":627.285036,"SZL":4.401539,"THB":8.55417,"TJS":2.722099,"TMT":0.873994,"TND":0.768331,"TOP":0.586935,"TRY":6.721368,"TTD":1.689817,"TWD":7.827004,"TZS":611.776157,"UAH":9.184658,"UGX":901.297338,"USD":0.249695,"UYU":9.42653,"UZS":2884.943838,"VES":7.307271,"VND":5911.387709,"VUV":29.640439,"WST":0.678874,"XAF":148.455871,"XAG":0.010339,"XAU":0.000339,"XCD":0.674761,"XDR":0.184627,"XOF":148.455767,"XPD":0.000334,"XPF":27.007248,"XPT":0.000267,"YER":62.503152,"ZAR":4.400858,"ZMW":4.619471,"ZWL":80.391455}}'
      );

      setRatesData(
        (ratesData) => (ratesData = { ...currencyRates, state: "done" })
      );

      setCurrency((currency) => (currency = Object.keys(currencyRates.rates)[0]));
      setRate(rate => rate = Object.values(currencyRates.rates)[0])
    };

    setTimeout(loadingData, 1500);
  }, []);

  const onFormSubmit = (event) => event.preventDefault();

  const setCurrencyRate = (currencyShortName) => {
    const index = Object.keys(ratesData.rates).findIndex(
      (element) => element === currencyShortName
    );

    setRate(Object.values(ratesData.rates)[index]);
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
