import Header from "./components/Header";
import Container from "./components/Container";
import SellBar from "./components/SellBar";
import Categories from "./components/Categories";
import OffersAll from "./components/OffersAll";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
import type { OfferItem } from "./types";
import calculateTotal from "./utils/calculateTotal";

function App() {
  const [fav, setFav] = useState<OfferItem[] | []>([]);
  const [showModal, setShowModal] = useState(false);

  const total = calculateTotal(fav);

  const addToFav = (item: OfferItem): void => {
    setFav((prev) => [...prev, item]);
  };

  const removeFromFav = (item: OfferItem): void => {
    setFav((prev) => prev.filter((favItem) => favItem.id !== item.id));
  };

  return (
    <div>
      <Header fav={fav} setShowModal={setShowModal} />
      <Container>
        <SellBar />
        <Categories />
        <OffersAll
          addToFav={addToFav}
          removeFromFav={removeFromFav}
          setFav={setFav}
        />
      </Container>
      <Footer />
      {showModal && (
        <div
          className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <Modal fav={fav} total={total} />
        </div>
      )}
    </div>
  );
}

export default App;
