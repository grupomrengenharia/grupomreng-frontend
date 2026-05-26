import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

import { CartStore } from './types';
import { cartActions } from './actions';

export const cartStore = createStore<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      services: [],
      itemsCount: 0,

      ...cartActions(set, get),
    }),
    {
      name: '@MR-Engenharia:cart',
    },
  ),
);

export function useCartStore() {
  return useStore(cartStore);
}
