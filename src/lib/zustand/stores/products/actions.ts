import { GetFunction, SetFunction } from '../../common';
import { ProductsStore, ProductsStoreActions } from './types';

export const productsActions = (
  set: SetFunction<ProductsStore>,
  get: GetFunction<ProductsStore>,
): ProductsStoreActions => ({
  findProduct: (productId) => {
    const { products } = get();
    return products.find((p) => p.id === productId);
  },
});
