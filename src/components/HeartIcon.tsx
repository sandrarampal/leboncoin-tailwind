import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { memo } from "react";
import type { OfferItem } from "../types";

// Définir une interface pour les props
interface HeartIconProps {
  dispatch: React.Dispatch<any>;
  darkMode: boolean;
  item: OfferItem;
}

const HeartIcon = ({ dispatch, darkMode, item }: HeartIconProps) => {
  const [like, setLike] = useState(false);

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
