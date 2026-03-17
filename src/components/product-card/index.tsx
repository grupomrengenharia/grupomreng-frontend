'use client';

import Image from 'next/image';
import { Product } from '@/src/@types';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback } from 'react';
import { useCart } from '@/src/hooks/use-cart';
import { toast } from 'sonner';
import { FaCheck } from 'react-icons/fa';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { addProductToCart, removeProductFromCart, findCartProduct } =
    useCart();
  const isProductInCart = !!findCartProduct(product.id); // Implement logic to check if the product is already in the cart

  const handleAddToCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      data: product,
    });

    addProductToCart(product);

    toast.success(`${product.name} adicionado ao carrinho!`);
  }, [addProductToCart, product]);

  const handleRemoveFromCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'removeFromCart',
      data: product,
    });

    removeProductFromCart(product.id);

    toast.success(`${product.name} removido do carrinho!`);
  }, [removeProductFromCart, product]);

  return (
    <div className="flex items-start gap-6 p-5 bg-(--opacity-black) rounded-lg shadow-md w-full">
      <div className="relative w-24 h-28 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-(--text-color-light) uppercase text-lg font-semibold">
          {product.name}
        </h3>
        <p className="text-(--text-color-secondary)">{product.description}</p>

        {isProductInCart ? (
          <button
            className="bg-(--success-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition"
            onClick={handleRemoveFromCart}
          >
            <span className="flex items-center gap-2">
              Adicionado ao carrinho <FaCheck />
            </span>
          </button>
        ) : (
          <button
            className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition"
            onClick={handleAddToCart}
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
}
