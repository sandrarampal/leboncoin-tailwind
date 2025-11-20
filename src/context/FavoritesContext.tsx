import { createContext } from "react";
import type { OfferItem } from "../types";

type TFavoritesContext = {
  fav: OfferItem[];
  total: number;
  dispatch: React.Dispatch<any>;
};

export const FavoritesContext = createContext<TFavoritesContext>({
  fav: [],
  total: 0,
  dispatch: () => {},
});
