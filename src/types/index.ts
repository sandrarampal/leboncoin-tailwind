export type TCategory = {
  id: number;
  image: string;
  title: string;
};

export type OfferItem = {
  id: number;
  avatar: string;
  username: string;
  stars?: number;
  comments?: number;
  image: string;
  title: string;
  price: number;
  delivery?: boolean;
  place: string;
  date: string;
};

export type TFav = {
  fav: OfferItem[];
};

export type OffersAllProps = {
  addToFav: (item: OfferItem) => void;
  removeFromFav: (item: OfferItem) => void;
  setFav: React.Dispatch<React.SetStateAction<[] | OfferItem[]>>;
  darkMode: boolean;
};

export type OffersProps = {
  title: string;
  items: OfferItem[];
  addToFav: (item: OfferItem) => void;
  removeFromFav: (item: OfferItem) => void;
  setFav: React.Dispatch<React.SetStateAction<OfferItem[]>>;
  darkMode: boolean;
};

export type TSetShowModal = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TSetDarkMode = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
