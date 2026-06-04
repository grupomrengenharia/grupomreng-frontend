import categories from '@/data/categories.json';

import { notFound } from 'next/navigation';

import { CategoryTree } from '../../components/types';
import { findCategory } from '../../components/utils';
import { ProductsView } from '../../components/products-view';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function ProductsByCategory({ params }: Readonly<Props>) {
  const { slug } = await params;

  const tree = categories as unknown as CategoryTree;

  const category = findCategory(tree, slug);

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
