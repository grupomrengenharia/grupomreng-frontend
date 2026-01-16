import { Product } from '@/src/@types';
import { ProductCard } from '../product-card';

interface Props {
  products: Product[];
}

export function ProductsSection({ products }: Props) {
  return (
    <section>
      <h2>Produtos</h2>
      <div>
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
