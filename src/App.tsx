import Header from "./components/Header";
import Container from "./components/Container";
import SellBar from "./components/SellBar";
import Categories from "./components/Categories";
import OffersAll from "./components/OffersAll";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SellBar />
        <Categories />
        <OffersAll />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
