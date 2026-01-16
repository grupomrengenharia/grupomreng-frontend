'use client';

import Image from 'next/image';
import { Product } from '@/src/@types';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback } from 'react';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const handleAddToCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      productId: product.id,
    });
  }, [product]);

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

        <button
          className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
