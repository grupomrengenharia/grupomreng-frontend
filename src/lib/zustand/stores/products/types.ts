import { Product } from '@/src/@types';

export type ProductsStoreActions = {
  findProduct: (productId: string) => Product | undefined;
};

export type ProductsStoreState = {
  products: Product[];
};

export type ProductsStore = ProductsStoreState & ProductsStoreActions;
