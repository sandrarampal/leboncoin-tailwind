import data from "../assets/data/data.json";
import { FaStar } from "react-icons/fa6";
import Delivery from "./Delivery";
import HeartIcon from "./HeartIcon";

export default function OffersAll() {
  const tablets = data.products.tablets;
  return (
    <div>
      <h1 className="text-xl font-bold">En ce moment sur leboncoin</h1>
      <div className="mt-3">
        <h2 className="font-bold">Tablettes & liseuses</h2>
        <div className="hide-scrollbar flex gap-4 overflow-scroll">
          {tablets.map((tablet) => {
            return (
              <div key={tablet.id} className="shrink-0">
                <div className="mt-3 flex max-w-40 items-center gap-1 overflow-hidden">
                  <img className="h-8 rounded-3xl" src={tablet.avatar} alt="" />
                  <p className="max-w-20 truncate font-bold">
                    {tablet.username}
                  </p>
                  {tablet.stars && <FaStar className="text-orange-dark" />}
                  <p className="font-bold">{tablet.stars}</p>
                  {tablet.comments && (
                    <p className="text-xs">({tablet.comments})</p>
                  )}{" "}
                </div>
                <div className="mb-3 h-72 w-42">
                  <img
                    src={tablet.image}
                    alt="image du produit"
                    className="mt-2 h-48 w-full rounded-lg object-cover"
                  />
                  <div className="font-bold">
                    <p>{tablet.title}</p>
                    <p>{tablet.price} €</p>
                  </div>
                </div>
                <div className="h-8">{tablet.delivery && <Delivery />}</div>
                <div className="mt-2 flex justify-between">
                  <div className="text-grey-font text-xs">
                    <p>{tablet.place}</p>
                    <p>{tablet.date}</p>
                  </div>
                  <HeartIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
