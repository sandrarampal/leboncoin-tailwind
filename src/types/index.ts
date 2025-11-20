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

export type OffersProps = {
  title: string;
  items: OfferItem[];
};

export type TSetShowModal = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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
