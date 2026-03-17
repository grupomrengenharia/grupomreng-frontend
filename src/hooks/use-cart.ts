import { useCallback, useEffect, useState } from 'react';
import { Cart, Product, Service } from '../@types';

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => {
    const cartData = localStorage.getItem('@MR-Engenharia:cart');

    return cartData ? JSON.parse(cartData) : { products: [], services: [] };
  });

  const addProductToCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (p) => p.id === product.id,
      );

      if (existingProduct) {
        return {
          ...prevCart,
          products: prevCart.products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        };
      }

      return {
        ...prevCart,
        products: [...prevCart.products, { ...product, quantity: 1 }],
      };
    });
  }, []);

  const removeProductFromCart = useCallback((productId: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find((p) => p.id === productId);

      if (existingProduct) {
        return {
          ...prevCart,
          products: prevCart.products.filter((p) => p.id !== productId),
        };
      }

      return prevCart;
    });
  }, []);

  const addServiceToCart = useCallback((service: Service) => {
    setCart((prevCart) => ({
      ...prevCart,
      services: [...prevCart.services, service],
    }));
  }, []);

  const removeServiceFromCart = useCallback((serviceId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      services: prevCart.services.filter((s) => s.id !== serviceId),
    }));
  }, []);

  const clearCart = useCallback(() => {
    setCart({ products: [], services: [] });
  }, []);

  const findCartProduct = useCallback(
    (productId: string) => {
      return cart.products.find((p) => p.id === productId);
    },
    [cart.products],
  );

  const findCartService = useCallback(
    (serviceId: string) => {
      return cart.services.find((s) => s.id === serviceId);
    },
    [cart.services],
  );

  useEffect(() => {
    localStorage.setItem('@MR-Engenharia:cart', JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
    addServiceToCart,
    removeServiceFromCart,
    clearCart,
    findCartProduct,
    findCartService,
  };
}
