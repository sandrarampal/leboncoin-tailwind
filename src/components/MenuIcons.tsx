import { MdDarkMode } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import type { TFav, TSetShowModal, TSetDarkMode } from "../types";

type TMenuIconsProps = TFav & TSetShowModal & TSetDarkMode;

export default function MenuIcons({
  fav,
  setShowModal,
  setDarkMode,
}: TMenuIconsProps) {
  const numberofFav = fav.length;

  return (
    <div className="flex h-15 items-center">
      <ul className="flex h-full w-100 items-center gap-3 overflow-hidden">
        <li
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex flex-col items-center justify-center hover:cursor-pointer"
        >
          <MdDarkMode />
          <p className="text-xs">Thème</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <CiBellOn />
          <p className="text-xs">Mes recherches</p>
        </li>
        <li
          onClick={() => setShowModal(true)}
          className="relative flex h-10 flex-col items-center justify-center hover:cursor-pointer"
        >
          {numberofFav > 0 && (
            <div className="absolute bottom-5.5 left-5 flex h-5 w-5 items-center justify-center rounded-xl bg-red-500 p-2 text-sm text-white">
              <p>{numberofFav}</p>
            </div>
          )}
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
