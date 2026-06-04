import { MenuIcon } from 'lucide-react';
import { CategoryNode } from './category-node';
import { CategoryTree } from './types';

interface SideMenuProps {
  categories: CategoryTree;
}

export function SideMenu({ categories }: Readonly<SideMenuProps>) {
  return (
    <aside
      className="
        w-80
        pr-10
        bg-[#151515]/70
        backdrop-blur-sm
        rounded-2xl
        border border-white/10
      "
    >
      <div className="p-4 flex items-center gap-2 text-(--brand-color)">
        <MenuIcon size={24} />
        <h2 className="font-bold text-lg">Categorias</h2>
      </div>
      <CategoryNode nodes={categories} level={0} path={[]} />
    </aside>
  );
}
