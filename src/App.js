import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header title="Kalkulator waluty Euro" />

      <Form />

      <Footer footerInfo="Copyright © 2023 Krystian Gręblowski" />
    </Container>
  );
}

export default App;
