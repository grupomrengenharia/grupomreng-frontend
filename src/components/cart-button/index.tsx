'use client';

import { useCart } from '@/src/hooks';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface Props {
  asFab?: boolean;
}

export function CartButton({ asFab = false }: Readonly<Props>) {
  const { itemsCount } = useCart();
  const pathname = usePathname();

  const fabStyles = asFab
    ? 'fixed bottom-5 right-5 z-10 p-5 rounded-full text-white bg-(--brand-color) justify-center transiton-all hover:opacity-75'
    : '';

  if (asFab && (itemsCount === 0 || pathname === '/carrinho')) {
    return null;
  }

  return (
    <Link
      href="/carrinho"
      className={twMerge('flex items-center gap-2', fabStyles)}
    >
      <div className="flex items-center justify-center relative">
        <ShoppingCart className="hover:opacity-75 transition-all" size={28} />
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemsCount}
        </span>
      </div>
      <span className="hidden">Carrinho</span>
    </Link>
  );
}
