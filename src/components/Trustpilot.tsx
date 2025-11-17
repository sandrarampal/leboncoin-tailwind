import { IoIosStar } from "react-icons/io";

export default function Trustpilot() {
  return (
    <div className="flex">
      <div className="bg-green-bright flex items-center rounded-l-xs pr-2 pl-2 text-sm font-bold">
        <IoIosStar />
        <p>Trustpilot</p>
      </div>
      <div className="text-grey-font rounded-r-xs bg-white pr-2 pl-2 text-sm">
        <p>142.7k avis</p>
      </div>
    </div>
  );
}
