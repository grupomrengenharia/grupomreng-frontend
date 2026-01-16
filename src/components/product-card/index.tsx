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
    <div className="flex items-start gap-2">
      <div className="relative w-25 h-25 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-(--text-color-light) uppercase text-lg font-semibold">
          {product.name}
        </h3>
        <p className="text-(--text-color-secondary)">{product.description}</p>

        <button
          className="bg-(--primary-color) text-white px-4 py-2 rounded uppercase font-semibold cursor-pointer"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
