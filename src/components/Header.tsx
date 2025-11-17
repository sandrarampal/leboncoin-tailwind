import logo from "../assets/img/logo-leboncoin.svg";
import { LuMenu } from "react-icons/lu";
import Container from "./Container";

export default function Header() {
  return (
    <div className="border-grey-light border-b pb-3">
      <Container>
        <LuMenu className="text-blue-main fixed mt-2 text-4xl" />
        <div className="flex justify-center pt-3 pb-3">
          <img src={logo} alt="logo du bon coin" />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Rechercher sur leboncoin"
            className="bg-grey-light w-full rounded-xl p-2 pl-8"
          />
        </div>
        <ul className="hide-scrollbar flex items-center gap-4 overflow-scroll pt-3 text-xs">
          <li>Immobilier</li>
          <li>.</li>
          <li>Véhicules</li>
          <li>.</li>
          <li className="whitespace-nowrap">Locations de vacances</li>
          <li>.</li>
          <li>Emploi</li>
          <li>.</li>
          <li>Mode</li>
          <li>.</li>
          <li>Maison</li>
          <li>.</li>
          <li>Jardin</li>
          <li>.</li>
          <li>Famille</li>
          <li>.</li>
          <li>Electronique</li>
          <li>.</li>
          <li>Loisirs</li>
          <li>.</li>
          <li>Autres</li>
        </ul>
      </Container>
    </div>
  );
}
