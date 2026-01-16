import { Product } from '@/src/@types';
import { ProductCard } from '../product-card';
import { SectionTitle } from '../section-title';

interface Props {
  products: Product[];
}

export function ProductsSection({ products }: Props) {
  return (
    <section className="space-y-2">
      <SectionTitle title="Produtos" />
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
      >
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
