import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductsStore } from './types';
import { productsActions } from './actions';

import products from '@/data/products.json';

export const productsStore = createStore<ProductsStore>()(
  persist(
    (set, get) => ({
      products,
      ...productsActions(set, get),
    }),
    {
      name: '@MR-Engenharia:products',
    },
  ),
);

export function useProductsStore() {
  return useStore(productsStore);
}
