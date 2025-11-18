import data from "../assets/data/data.json";
import Offers from "./Offers";
import type { OffersAllProps } from "../types";

export default function OffersAll({
  addToFav,
  removeFromFav,
  setFav,
}: OffersAllProps) {
  const tablets = data.products.tablets;
  const consols = data.products.consols;

  return (
    <div>
      <h1 className="text-xl font-bold">En ce moment sur leboncoin</h1>
      <Offers
        title="Tablettes & liseuses"
        items={tablets}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        setFav={setFav}
      />
      <Offers
        title="Consoles & jeux vidéo"
        items={consols}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        setFav={setFav}
      />
    </div>
  );
}
