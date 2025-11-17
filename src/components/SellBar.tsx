import Button from "./Button";

export default function SellBar() {
  return (
    <div className="bg-orange-light mt-4 flex flex-col items-center justify-center gap-2 rounded-xl pt-4 pb-4 font-bold">
      <p className="text-xl">C'est le moment de vendre</p>
      <Button />
    </div>
  );
}
