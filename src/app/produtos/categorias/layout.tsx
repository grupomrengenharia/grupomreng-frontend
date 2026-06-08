import { SideMenu } from '../components/side-menu';
import categories from '@/data/categories.json';
import { CategoryTree } from '../components/types';
import { normalizeCategoryName } from '@/src/utils';

export default async function ProductsPage({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const resolvedParams = await params;
  console.log('Resolved params in layout:', resolvedParams);

  return (
    <section className="flex flex-col gap-10 section min-h-[80vh] pt-10 pb-10">
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="lg:w-1/4">
          <SideMenu categories={categories as unknown as CategoryTree} />
        </div>
        <div className="w-full pt-10">
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
