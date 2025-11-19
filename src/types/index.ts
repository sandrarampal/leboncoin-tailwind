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
  dispatch: React.Dispatch<any>;
  darkMode: boolean;
};

export type OffersProps = {
  title: string;
  items: OfferItem[];
  dispatch: React.Dispatch<any>;
  darkMode: boolean;
};

export type TSetShowModal = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TSetDarkMode = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TState = {
  total: number;
  fav: OfferItem[];
};

export type TAction =
  | {
      type: "add_to_fav";
      payload: OfferItem;
    }
  | {
      type: "remove_from_fav";
      payload: OfferItem;
    };
