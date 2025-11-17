import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

export default function HeartIcon() {
  const [like, setLike] = useState(false);
  return (
    <button className="hover:cursor-pointer" onClick={() => setLike(!like)}>
      {like ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
  );
}
