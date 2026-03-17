import { Product } from './product';
import { Service } from './service';

type CartProduct = Product & { quantity: number };

export type Cart = {
  products: CartProduct[];
  services: Service[];
};
