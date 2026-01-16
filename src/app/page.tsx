import products from '@/data/products.json';
import { ProductsSection } from '../components';

export default function Home() {
  return (
    <div>
      <main></main>
      <ProductsSection products={products} />
    </div>
  );
}
