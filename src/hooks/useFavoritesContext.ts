import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const useFavoritesContext = () => useContext(FavoritesContext);

export default useFavoritesContext;
