import type { OfferItem } from "../types";

export default function calculateTotal(fav: OfferItem[]): number {
  return fav.reduce((total: number, item: OfferItem) => total + item.price, 0);
}
