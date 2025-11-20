import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { memo } from "react";
import type { OfferItem } from "../types";
import useDarkModeContext from "../hooks/useDarkModeContext";
import useFavoritesContext from "../hooks/useFavoritesContext";

// Définir une interface pour les props
interface HeartIconProps {
  item: OfferItem;
}

const HeartIcon = ({ item }: HeartIconProps) => {
  const [like, setLike] = useState(false);
  const { dispatch } = useFavoritesContext();
  const { darkMode } = useDarkModeContext();

  const handleClick = () => {
    dispatch({
      type: like ? "remove_from_fav" : "add_to_fav",
      payload: item,
    });
    setLike(!like);
  };

  return (
    <button className="hover:cursor-pointer" onClick={handleClick}>
      {like ? (
        <FaHeart className={`text-red-500`} />
      ) : (
        <FaRegHeart className={darkMode ? "text-white" : ""} />
      )}
    </button>
  );
};

export default memo(HeartIcon);
