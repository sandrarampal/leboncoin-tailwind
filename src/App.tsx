import Header from "./components/Header";
import Container from "./components/Container";
import SellBar from "./components/SellBar";
import Categories from "./components/Categories";
import OffersAll from "./components/OffersAll";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

import useDarkModeContext from "./hooks/useDarkModeContext";

function App() {
  const { darkMode } = useDarkModeContext();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${darkMode ? "bg-blue-dark" : ""}`}>
      <Header setShowModal={setShowModal} />
      <Container>
        <SellBar />
        <Categories />
        <OffersAll />
      </Container>
      <Footer />
      {showModal && (
        <div
          className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <Modal />
        </div>
      )}
    </div>
  );
}

export default App;
