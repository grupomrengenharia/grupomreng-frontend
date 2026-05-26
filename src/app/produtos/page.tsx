'use client';

import { ProductCard } from '@/src/components';
import { useProducts } from '@/src/hooks/use-products';
import { useCallback, useMemo, useState } from 'react';

export default function ProductsPage() {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.target.value.toLowerCase();
      const filtered = products.filter((product) => {
        return product.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setFilteredProducts(filtered);
    },
    [products],
  );

  const renderedProducts = useMemo(() => {
    if (filteredProducts.length === 0) {
      return (
        <div>
          <span>Nenhum produto encontrado</span>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }, [filteredProducts]);

  return (
    <section className="flex flex-col gap-10 section min-h-[80vh]">
      <h1 className="font-bold text-lg">Produtos</h1>
      <div className="flex gap-10">
        <aside className="w-1/4">
          <div>
            <h2 className="font-bold text-lg">Categorias</h2>
          </div>
        </aside>
        <div className="flex flex-col gap-10 w-full">
          <div>
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleSearch}
            />
          </div>
          <div>{renderedProducts}</div>
        </div>
      </div>
    </section>
  );
}
