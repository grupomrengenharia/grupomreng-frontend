'use client';

import categories from '@/data/categories.json';

import { notFound } from 'next/navigation';

import { CategoryTree } from '../components/types';
import { findCategory } from '../components/utils';
import { ProductsView } from '../components/products-view';
import { sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

export default function CategoriesPage() {
  const tree = categories as unknown as CategoryTree;

  const category = findCategory(tree, [
    'abrigos-de-hidrante-e-extintor',
    'abrigos-para-extintor',
  ]);

  useEffect(() => {
    sendGAEvent('event', 'page_view', {
      page: 'categorias',
      data: {
        category: 'base_category',
      },
    });
  }, []);

  if (
    !category ||
    !('products' in category) ||
    !Array.isArray(category.products)
  ) {
    return notFound();
  }

  return (
    <div className="flex">
      <main className="flex-1">
        <ProductsView products={category.products} />
      </main>
    </div>
  );
}
