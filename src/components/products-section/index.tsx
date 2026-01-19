import { Product } from '@/src/@types';
import { ProductCard } from '../product-card';
import { SectionTitle } from '../section-title';
import Link from 'next/link';

interface Props {
  products: Product[];
}

export function ProductsSection({ products }: Props) {
  const maxProductsToShow = 3;
  const productsToShow = products.slice(0, maxProductsToShow);

  return (
    <section className="space-y-2">
      <SectionTitle title="Produtos" />
      <div
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {productsToShow.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
      <div className="mt-10 flex">
        <Link
          href="/produtos"
          className="hover:bg-(--brand-color) border-white/20 border-2 hover:border-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition min-w-full text-center"
        >
          Ver todos os produtos
        </Link>
      </div>
    </section>
  );
}
