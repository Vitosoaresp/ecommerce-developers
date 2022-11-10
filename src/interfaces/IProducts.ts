export interface IProducts {
  id: string;
  title: string;
  price: number;
  sold_quantity: number;
  condition: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  }
}