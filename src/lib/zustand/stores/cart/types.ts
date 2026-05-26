import { Product, Service } from '@/src/@types';

export type CartStoreActions = {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  addServiceToCart: (service: Service) => void;
  removeServiceFromCart: (serviceId: string) => void;
  findCartProduct: (
    productId: string,
  ) => (Product & { quantity: number }) | undefined;
  findCartService: (serviceId: string) => Service | undefined;
  updateProductQuantity: (productId: string, quantity: number) => void;
};

export type CartStoreState = {
  products: (Product & { quantity: number })[];
  services: Service[];
  itemsCount: number;
};

export type CartStore = CartStoreState & CartStoreActions;
