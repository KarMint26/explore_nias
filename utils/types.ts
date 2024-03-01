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
}
