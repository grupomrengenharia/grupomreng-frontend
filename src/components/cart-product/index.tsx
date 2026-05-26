'use client';

import { Product } from '@/src/@types';
import { useCart } from '@/src/hooks';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface CartProduct {
  product: Product & {
    quantity: number;
  };
}

export function CartProduct({ product }: Readonly<CartProduct>) {
  const { removeProductFromCart, updateProductQuantity } = useCart();

  const adjustNewValue = (newValue: number) => {
    if (newValue < 1) return 1;
    if (newValue > 100) return 100;
    return newValue;
  };

  const handleQuantityChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = parseInt(event.target.value, 10);

      if (newQuantity < 1) return; // Evita quantidades menores que 1

      if (newQuantity > 100) return; // limita a quantidade máxima

      const adjustedQuantity = adjustNewValue(newQuantity);

      updateProductQuantity(product.id, adjustNewValue(adjustedQuantity));
    },
    [product.id, updateProductQuantity],
  );

  const handleUpdateQuantity = useCallback(
    (type: 'increment' | 'decrement') => {
      const newQuantity =
        type === 'increment' ? product.quantity + 1 : product.quantity - 1;
      updateProductQuantity(product.id, adjustNewValue(newQuantity));
    },
    [product, updateProductQuantity],
  );

  return (
    <div className="flex items-center w-full gap-5 bg-slate-400/5 p-3 rounded-md h-36">
      <div className="relative w-24 h-28 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <Link
        href={`/produtos/${product.id}`}
        className="flex-1 flex items-center hover:bg-slate-400/10 rounded-md transition-colors h-full p-2 px-4"
      >
        <div className="flex flex-col justify-center flex-2 gap-1 h-full">
          <span className="font-bold text-lg">{product.name}</span>
          <p>{product.description}</p>
        </div>
      </Link>

      <div className="flex gap-24 items-center mr-6">
        <div className="flex gap-2">
          <button
            onClick={() => handleUpdateQuantity('decrement')}
            className="cursor-pointer"
          >
            <FaMinus size={20} />
          </button>

          <input
            type="number"
            name="quantity"
            id={`quantity-${product.id}`}
            value={product.quantity}
            min={1}
            max={100}
            onChange={handleQuantityChange}
            className="
              w-16 p-1 
              border border-gray-300 
              rounded-md text-center
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              "
          />
          <button
            onClick={() => handleUpdateQuantity('increment')}
            className="cursor-pointer"
          >
            <FaPlus size={20} />
          </button>
        </div>
        <div className="cursor-pointer hover:text-red-500 transition-colors">
          <Trash onClick={() => removeProductFromCart(product.id)} size={20} />
        </div>
      </div>
    </div>
  );
}
