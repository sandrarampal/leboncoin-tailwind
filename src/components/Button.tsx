import { FaRegPlusSquare } from "react-icons/fa";

export default function Button() {
  return (
    <button className="bg-orange-main flex w-56 shrink-0 items-center gap-2 rounded-2xl p-1.5 pr-5 pl-4 font-bold text-white">
      <FaRegPlusSquare />
      <p>Déposer une annonce</p>
    </button>
  );
}
