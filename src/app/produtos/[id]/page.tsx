'use client';

import { useCart } from '@/src/hooks';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import productsById from '@/data/products-by-id.json';
import { capitalize, normalizeCategoryName } from '@/src/utils';
import { Badge, ProductsSection } from '@/src/components';
import { findCategory } from '../components/utils';
import categories from '@/data/categories.json';
import { CategoryTree } from '../components/types';

export default function SingleProductPage() {
  const params = useParams<{ id: string }>();

  const { addProductToCart, removeProductFromCart, findCartProduct } =
    useCart();

  const isProductInCart = !!findCartProduct(params.id);

  const product = productsById.find((p) => p.id === params.id);
  const [selectedVariation, setSelectedVariation] = useState(
    product?.variations[0] || null,
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = useCallback(() => {
    if (!product) return;

    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      data: product,
    });

    addProductToCart({ ...product, variationCode: selectedVariation?.code });
  }, [addProductToCart, product, selectedVariation]);

  const handleRemoveFromCart = useCallback(() => {
    if (!product) return;

    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'removeFromCart',
      data: product,
    });

    removeProductFromCart(product.id);
  }, [removeProductFromCart, product]);

  const handleSelectVariation = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!product) return;

      const variation = product.variations.find(
        (v) => v.code === e.target.value,
      );
      if (variation) {
        setSelectedVariation(variation);
      }
    },
    [product],
  );

  const handleSelectImage = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const category = findCategory(
    categories as unknown as CategoryTree,
    product?.categories || [],
  );

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      // Converte scroll vertical em horizontal
      e.preventDefault();
      carousel.scrollLeft += e.deltaY;
    };

    carousel.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, []);

  if (!product || !selectedVariation) {
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
    <div className="section pt-10 mb-20 flex flex-col gap-20">
      <div className="flex flex-col items-center md:flex-row sm:items-start lg:gap-32 gap-20">
        <div className="flex flex-col gap-5 relative">
          {/* Imagem principal */}
          <div className="w-full max-w-150 aspect-3/2">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Carrossel */}
          <div
            ref={carouselRef}
            className="
          flex
          gap-2
          w-full
          max-w-150
          overflow-x-auto
          no-scrollbar
          overflow-y-hidden
          snap-x
          snap-mandatory
          overscroll-x-contain
          pb-2
        "
          >
            {product.images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectImage(index)}
                className={`
              shrink-0
              snap-start
              cursor-pointer
              rounded-md
              border-2
              transition-colors
              ${
                selectedImageIndex === index
                  ? 'border-(--primary-color)'
                  : 'border-default-medium'
              }
            `}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-25 h-25 object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 flex-1/2 w-full">
          <h1 className="text-4xl font-bold">{capitalize(product.name)}</h1>

          <div className="flex flex-col gap-2">
            <div>
              <span className="text-sm block">Categorias: </span>
              <div className="flex gap-2 py-2">
                {product.categories.map((category) => (
                  <Badge
                    text={normalizeCategoryName(category)}
                    key={category}
                  />
                ))}
              </div>
            </div>
            <span className="text-sm block">
              Código do produto: <Badge text={selectedVariation.code ?? '-'} />
            </span>
            <div>
              <span>Variação selecionada:</span>
              <div>
                <select
                  value={selectedVariation.code}
                  onChange={handleSelectVariation}
                  className="block px-3 py-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-md cursor-pointer my-2 w-max pr-40"
                >
                  {product.variations.map((variation) => (
                    <option
                      value={variation.code}
                      key={variation.code}
                      className="text-black"
                    >
                      {variation.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
      <div>
        <ProductsSection
          products={
            category?.products?.filter((p) => p.id !== product.id) || []
          }
          title="Produtos relacionados"
        />
      </div>
    </div>
  );
}
