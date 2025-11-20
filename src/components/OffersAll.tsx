import data from "../assets/data/data.json";
import Offers from "./Offers";
import { memo } from "react";

import useDarkModeContext from "../hooks/useDarkModeContext";

const OffersAll = () => {
  const { darkMode } = useDarkModeContext();

  const tablets = data.products.tablets;
  const consols = data.products.consols;

  return (
    <div>
      <h1
        className={`text-xl font-bold ${darkMode ? "bg-blue-dark text-white" : ""}`}
      >
        En ce moment sur leboncoin
      </h1>
      <Offers title="Tablettes & liseuses" items={tablets} />
      <Offers title="Consoles & jeux vidéo" items={consols} />
    </div>
  );
};

export default memo(OffersAll);
