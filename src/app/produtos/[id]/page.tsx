'use client';

import { useCart } from '@/src/hooks';
import { useProducts } from '@/src/hooks/use-products';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function SingleProductPage() {
  const params = useParams<{ id: string }>();
  const { findProduct } = useProducts();

  const { addProductToCart, removeProductFromCart, findCartProduct } =
    useCart();
  const isProductInCart = !!findCartProduct(params.id);

  const product = findProduct(params.id);

  const handleAddToCart = useCallback(() => {
    if (!product) return;

    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      data: product,
    });

    addProductToCart(product);
  }, [addProductToCart, product]);

  const handleRemoveFromCart = useCallback(() => {
    if (!product) return;

    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'removeFromCart',
      data: product,
    });

    removeProductFromCart(product.id);
  }, [removeProductFromCart, product]);

  if (!product) {
    return (
      <div>
        <h2>Produto não encontrado</h2>
        <Link
          href="/produtos/categorias"
          className="text-(--primary-color) hover:underline"
        >
          Ir para página de produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start lg:gap-32 gap-20 section min-h-[80vh] mb-20">
      <div>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <div className="flex flex-col gap-2">
          <span className="text-sm opacity-70 block">
            Categorias: {product.categories.join(', ')}
          </span>
          {/* // to-do ajustar variação */}
          <span className="text-sm opacity-70 block">
            Código do produto: {product.code}
          </span>
        </div>

        <p>{product.description}</p>

        <div>
          {isProductInCart ? (
            <button
              className="bg-(--success-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition w-max"
              onClick={handleRemoveFromCart}
            >
              <span className="flex items-center gap-2">
                No carrinho <FaCheck />
              </span>
            </button>
          ) : (
            <button
              className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition w-max"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
