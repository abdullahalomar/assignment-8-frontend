export interface Product {
  [x: string]: unknown;
  _id: string;
  image_url: string;
  title: string;
  price: string;
  rating: number;
  category: string;
  description: string;
}
