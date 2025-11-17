import { MdDarkMode } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FiUser } from "react-icons/fi";

export default function MenuIcons() {
  return (
    <div>
      <ul className="flex w-100 gap-2 overflow-hidden">
        <li className="flex flex-col items-center justify-center">
          <MdDarkMode />
          <p className="text-xs">Thème</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <CiBellOn />
          <p className="text-xs">Mes recherches</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaRegHeart />
          <p className="text-xs">Favoris</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <MdOutlineMessage />
          <p className="text-xs">Messages</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FiUser />
          <p className="text-xs">Se connecter</p>
        </li>
      </ul>
    </div>
  );
}
