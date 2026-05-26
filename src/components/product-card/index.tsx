/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Image from 'next/image';
import { Product } from '@/src/@types';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback, useEffect, useState } from 'react';
import { useCart } from '@/src/hooks/use-cart';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { addProductToCart, removeProductFromCart, findCartProduct } =
    useCart();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const isProductInCart = hydrated && !!findCartProduct(product.id);

  const handleAddToCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      data: product,
    });

    addProductToCart(product);
  }, [addProductToCart, product]);

  const handleRemoveFromCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'removeFromCart',
      data: product,
    });

    removeProductFromCart(product.id);
  }, [removeProductFromCart, product]);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-5 bg-(--opacity-black) rounded-lg shadow-md w-full">
      <Image
        src={product.images[0]}
        alt={product.name}
        width={128}
        height={128}
        className="object-cover rounded-md "
      />
      {/* <div className="relative w-32 h-full overflow-hidden shrink-0">
      </div> */}

      <div className="flex flex-col justify-between gap-2 w-full h-full">
        <span className="text-sm opacity-70">Cod.: {product.code}</span>
        <Link href={`/produtos/${product.id}`}>
          <div className="flex flex-col hover:bg-slate-400/10 rounded-md transition-colors p-2">
            <h3 className="text-(--text-color-light) uppercase text-lg font-semibold">
              {product.name}
            </h3>
            <p className="text-(--text-color-secondary) line-clamp-2 max-w-64 sm:max-w-full">
              {product.description}
            </p>
          </div>
        </Link>

        {isProductInCart ? (
          <button
            className="bg-(--success-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition md:w-max"
            onClick={handleRemoveFromCart}
          >
            <span className="flex justify-center items-center gap-2">
              No carrinho <FaCheck />
            </span>
          </button>
        ) : (
          <button
            className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition md:w-max"
            onClick={handleAddToCart}
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
}
