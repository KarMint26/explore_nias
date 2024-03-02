export type culture = {
  id: number;
  title: string;
  longTitle: string;
  text: string;
};

export type article = {
  id: number;
  location: string;
  datetime: string;
  title: string;
  text: string;
  url: string;
  isReverse: boolean;
  isDiff: boolean;
};

export type tour = {
  id: number;
  nameId: string;
  nameEn: string;
  image: string;
  descId: string;
  descEn: string;
  maps: string;
};

export type tourCulinary = {
  id: number;
  name: string;
  image: string;
  descId: string;
  descEn: string;
  maps: string;
};
