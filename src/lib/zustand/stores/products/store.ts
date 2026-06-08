import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductsStore } from './types';
import { productsActions } from './actions';

// to-do importar produtos do json de produto separados por ID e não por categoria, para facilitar a busca por ID do produto

export const productsStore = createStore<ProductsStore>()(
  persist(
    (set, get) => ({
      products: [],
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
