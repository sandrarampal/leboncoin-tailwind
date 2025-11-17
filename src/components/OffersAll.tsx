import data from "../assets/data/data.json";
import Offers from "./Offers";

export default function OffersAll() {
  const tablets = data.products.tablets;
  const consols = data.products.consols;

  return (
    <div>
      <h1 className="text-xl font-bold">En ce moment sur leboncoin</h1>
      <Offers title="Tablettes & liseuses" items={tablets} />
      <Offers title="Consoles & jeux vidéo" items={consols} />
    </div>
  );
}
