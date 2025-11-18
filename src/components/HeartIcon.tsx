import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { memo } from "react";

// Définir une interface pour les props
interface HeartIconProps {
  addItem: () => void;
  removeItem: () => void;
}

const HeartIcon = ({ addItem, removeItem }: HeartIconProps) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    const newLikeState = !like;
    setLike(newLikeState);

    if (newLikeState) {
      addItem();
    } else {
      removeItem();
    }
  };

  return (
    <button className="hover:cursor-pointer" onClick={handleClick}>
      {like ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
  );
};

export default memo(HeartIcon);
