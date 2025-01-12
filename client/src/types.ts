export interface User {
  email: string;
  fname: string;
  lname: string;
  phone: string;
  photo: string;
  locations: object[];
  favoritesShops: string[];
  cart: IOrder[];
  fullname: string;
}

export interface IOrder {
  user: string;
  shop: string;
  createdAt: Date;
  deliveringTime?: number;
  items: {
    product: string;
    quantity: number;
    pricePerUnit: number;
  }[];
  hasSent: boolean;
  totalPrice: number; // Virtual property
}
