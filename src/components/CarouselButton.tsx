import { FaArrowLeft } from "react-icons/fa6";

type TCarouselButtonProps = {
  onClick: () => void;
};

export default function CarouselButton({ onClick }: TCarouselButtonProps) {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-2xl border-2 p-1 hover:cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="text-2xl font-bold" />
    </button>
  );
}
