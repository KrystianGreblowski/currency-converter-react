function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Kalkulator waluty Euro</h1>
      </header>

      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicznik EUR/PLN</legend>
          <div className="form__body">
            <span className="form__field">Kwota</span>
            <div className="form__inputValue">
              <input
                className="form__field form__field--input"
                type="number"
                name="inputAmount"
                placeholder="0.00"
              />
              <select
                className="form__field form__field--select"
                name="currency"
              >
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

      <footer className="footer">Copyright © 2023 Krystian Gręblowski</footer>
    </div>
  );
}

export default App;
