import { Product } from './product';
import { Service } from './service';

export type CartProduct = Product & { quantity: number; variationCode: string };

export type Cart = {
  products: CartProduct[];
  services: Service[];
};
