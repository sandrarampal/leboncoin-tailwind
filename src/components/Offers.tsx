import { FaStar } from "react-icons/fa6";
import Delivery from "./Delivery";
import HeartIcon from "./HeartIcon";
import type { OffersProps } from "../types";

export default function Offers({ title, items }: OffersProps) {
  return (
    <div className="mt-3">
      <h2 className="font-bold">{title}</h2>
      <div className="hide-scrollbar flex gap-4 overflow-scroll">
        {items.map((item) => {
          return (
            <div key={item.id} className="shrink-0">
              <div className="mt-3 flex max-w-40 items-center gap-1 overflow-hidden">
                <img className="h-8 rounded-3xl" src={item.avatar} alt="" />
                <p className="max-w-20 truncate font-bold">{item.username}</p>
                {item.stars && <FaStar className="text-orange-dark" />}
                <p className="font-bold">{item.stars}</p>
                {item.comments && (
                  <p className="text-xs">({item.comments})</p>
                )}{" "}
              </div>
              <div className="mb-3 h-72 w-42">
                <img
                  src={item.image}
                  alt="image du produit"
                  className="mt-2 h-48 w-full rounded-lg object-cover"
                />
                <div className="font-bold">
                  <p>{item.title}</p>
                  <p>{item.price} €</p>
                </div>
              </div>
              <div className="h-8">{item.delivery && <Delivery />}</div>
              <div className="mt-2 mb-3 flex justify-between">
                <div className="text-grey-font text-xs">
                  <p>{item.place}</p>
                  <p>{item.date}</p>
                </div>
                <HeartIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
