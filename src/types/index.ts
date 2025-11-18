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

export type OffersProps = {
  title: string;
  items: OfferItem[];
};
