import { GetFunction, SetFunction } from '../../common';
import { CartStore, CartStoreActions } from './types';

export const cartActions = (
  set: SetFunction<CartStore>,
  get: GetFunction<CartStore>,
): CartStoreActions => ({
  addProductToCart: (product) => {
    const { products } = get();

    const existingProduct = products.find((p) => p.id === product.id);

    if (existingProduct) {
      return set({
        products: products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
        itemsCount: get().itemsCount + 1,
      });
    }

    set({
      products: [
        ...products,
        {
          ...product,
          quantity: 1,
          variationCode: product.variationCode || product.variations[0].code,
        },
      ],
      itemsCount: get().itemsCount + 1,
    });
  },
  removeProductFromCart: (productId) => {
    const { products } = get();

    set({
      products: products.filter((p) => p.id !== productId),
      itemsCount: get().itemsCount - 1,
    });
  },
  addServiceToCart: (service) => {
    const { services } = get();

    set({ services: [...services, service], itemsCount: get().itemsCount + 1 });
  },
  removeServiceFromCart: (serviceId) => {
    const { services } = get();

    set({
      services: services.filter((s) => s.id !== serviceId),
      itemsCount: get().itemsCount - 1,
    });
  },
  findCartProduct: (productId) => {
    const { products } = get();
    return products.find((p) => p.id === productId);
  },
  findCartService: (serviceId) => {
    const { services } = get();
    return services.find((s) => s.id === serviceId);
  },
  updateProductQuantity: (productId, quantity) => {
    const { products } = get();
    set({
      products: products.map((p) =>
        p.id === productId ? { ...p, quantity } : p,
      ),
    });
  },
  clearCart: () => {
    set({ products: [], services: [], itemsCount: 0 });
  },
});
