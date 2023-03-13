export interface Offer {
  id: number;
  category: Category;
  title: string;
  description: string;
  mobile: string;
  price: number;
  location: string;
}

export enum Category {
  RENT = "rent",
  SALE = "sale"
}
