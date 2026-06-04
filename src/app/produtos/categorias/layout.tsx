'use client';

import { SideMenu } from '../components/side-menu';
import categories from '@/data/categories.json';
import { CategoryTree } from '../components/types';

export default function ProductsPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col gap-10 section min-h-[80vh] pt-10 pb-10">
      <div className="flex gap-10">
        <aside className="w-1/4">
          <div>
            <SideMenu categories={categories as unknown as CategoryTree} />
          </div>
        </aside>
        <div className="flex flex-col gap-10 w-full pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Produtos</h1>
            <span>
              Encontre tudo o que você precisa em segurança e prevenção.
            </span>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
