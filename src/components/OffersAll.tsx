import data from "../assets/data/data.json";
import Offers from "./Offers";
import type { OffersAllProps } from "../types";
import { memo } from "react";

const OffersAll = ({
  addToFav,
  removeFromFav,
  setFav,
  darkMode,
}: OffersAllProps) => {
  const tablets = data.products.tablets;
  const consols = data.products.consols;

  return (
    <div>
      <h1
        className={`text-xl font-bold ${darkMode ? "bg-blue-dark text-white" : ""}`}
      >
        En ce moment sur leboncoin
      </h1>
      <Offers
        title="Tablettes & liseuses"
        items={tablets}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        setFav={setFav}
        darkMode={darkMode}
      />
      <Offers
        title="Consoles & jeux vidéo"
        items={consols}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        setFav={setFav}
        darkMode={darkMode}
      />
    </div>
  );
};

export default memo(OffersAll);
