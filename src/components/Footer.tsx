import Trustpilot from "./Trustpilot";

export default function Footer() {
  return (
    <div className="bg-grey-dark mt-10 flex h-20 items-center justify-between p-5 text-white">
      <p>leboncoin 2006 - 2024</p>
      <div className="hidden lg:block">
        <p>Made by Sandra Rampal at Le Reacteur</p>
      </div>
      <Trustpilot />
    </div>
  );
}
