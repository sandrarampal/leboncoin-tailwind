import Header from "./components/Header";
import Container from "./components/Container";
import SellBar from "./components/SellBar";
import Categories from "./components/Categories";
import OffersAll from "./components/OffersAll";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SellBar />
        <Categories />
        <OffersAll />
      </Container>
    </div>
  );
}

export default App;
