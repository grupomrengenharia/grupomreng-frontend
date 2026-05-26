import { useProductsStore } from '../lib/zustand/stores/products';

export function useProducts() {
  return useProductsStore();
}
