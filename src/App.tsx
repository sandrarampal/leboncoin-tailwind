import Header from "./components/Header";
import Container from "./components/Container";
import SellBar from "./components/SellBar";
import Categories from "./components/Categories";
import OffersAll from "./components/OffersAll";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState, useMemo, useCallback } from "react";
import type { OfferItem } from "./types";
import calculateTotal from "./utils/calculateTotal";

function App() {
  const [fav, setFav] = useState<OfferItem[] | []>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const total = useMemo(() => calculateTotal(fav), [fav]);

  const addToFav = useCallback((item: OfferItem): void => {
    setFav((prev) => [...prev, item]);
  }, []);

  const removeFromFav = useCallback((item: OfferItem): void => {
    setFav((prev) => prev.filter((favItem) => favItem.title !== item.title));
  }, []);
  return (
    <div className={`${darkMode ? "bg-blue-dark" : ""}`}>
      <Header
        fav={fav}
        setShowModal={setShowModal}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Container>
        <SellBar />
        <Categories darkMode={darkMode} />
        <OffersAll
          addToFav={addToFav}
          removeFromFav={removeFromFav}
          setFav={setFav}
          darkMode={darkMode}
        />
      </Container>
      <Footer />
      {showModal && (
        <div
          className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <Modal fav={fav} total={total} />
        </div>
      )}
    </div>
  );
}

export default App;
