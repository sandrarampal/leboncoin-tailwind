import logo from "../assets/img/logo-leboncoin.svg";
import { LuMenu } from "react-icons/lu";
import Container from "./Container";
import SearchIcon from "./SearchIcon";
import Button from "./Button";
import MenuIcons from "./MenuIcons";
import type { TFav, TSetShowModal } from "../types";

export default function Header({ fav, setShowModal }: TFav & TSetShowModal) {
  return (
    <div className="border-grey-light border-b pt-3 pb-3">
      <Container>
        <LuMenu className="text-blue-main fixed mt-2 text-4xl lg:hidden" />
        <div className="h-full lg:flex lg:items-center lg:justify-between lg:gap-4">
          <div className="flex items-center justify-center pt-3 pb-3">
            <img src={logo} alt="logo du bon coin" />
          </div>
          <div className="hidden lg:block">
            <Button />
          </div>
          <div className="relative bottom-3">
            <SearchIcon />
            <input
              type="text"
              placeholder="Rechercher sur leboncoin"
              className="bg-grey-light w-full rounded-xl p-2 pl-8 lg:w-55 lg:pl-2"
            />
          </div>
          <div className="hidden h-full lg:block lg:overflow-hidden">
            <MenuIcons fav={fav} setShowModal={setShowModal} />
          </div>
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
