'use client';

import { Product } from '@/src/@types';
import { Pagination, ProductCard } from '@/src/components';

interface Props {
  products: Product[];
}

export function ProductsView({ products }: Readonly<Props>) {
  return (
    <Pagination
      asList
      items={products}
      renderItem={(product) => (
        <ProductCard product={product} key={product.id} />
      )}
    />
  );
}
