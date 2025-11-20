import { useReducer } from "react";
import type { ReactNode } from "react";
import type { OfferItem, TState, TAction } from "../../types";
import calculateTotal from "../../utils/calculateTotal";
import { FavoritesContext } from "../FavoritesContext";

type TCompProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: TCompProps) => {
  const favReducer = (state: TState, action: TAction) => {
    switch (action.type) {
      case "add_to_fav":
        const newFav: OfferItem[] = [...state.fav, action.payload];
        return {
          ...state,
          fav: newFav,
          total: calculateTotal(newFav),
        };

      case "remove_from_fav":
        const newFavRemove: OfferItem[] = state.fav.filter(
          (elem) => elem.title !== action.payload.title,
        );
        return {
          ...state,
          fav: newFavRemove,
          total: calculateTotal(newFavRemove),
        };
      default:
        return state;
    }
  };

  const [{ fav, total }, dispatch] = useReducer(favReducer, {
    fav: [],
    total: 0,
  });

  return (
    <FavoritesContext.Provider value={{ fav, total, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
