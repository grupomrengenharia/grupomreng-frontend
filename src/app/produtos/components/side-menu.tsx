'use client';

import { MenuIcon, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CategoryNode } from './category-node';
import { CategoryTree } from './types';
import { twMerge } from 'tailwind-merge';

interface SideMenuProps {
  categories: CategoryTree;
}

export function SideMenu({ categories }: Readonly<SideMenuProps>) {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className="
        w-full
        lg:w-80
        lg:pr-10
        bg-[#151515]/70
        backdrop-blur-sm
        rounded-2xl
        border border-white/10
      "
    >
      {/* Mobile Accordion */}
      <button
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          w-full
          p-4
          flex
          items-center
          justify-between
          text-(--brand-color)
        "
      >
        <div className="flex items-center gap-2">
          <MenuIcon size={24} />
          <h2 className="font-bold text-lg">Categorias</h2>
        </div>

        <ChevronDown
          size={20}
          className={twMerge('transition-transform', open && 'rotate-180')}
        />
      </button>

      {/* Desktop Header */}
      <div className="hidden lg:flex p-4 items-center gap-2 text-(--brand-color)">
        <MenuIcon size={24} />
        <h2 className="font-bold text-lg">Categorias</h2>
      </div>

      {/* Conteúdo */}
      <div
        className={twMerge(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-500' : 'max-h-0',
          'lg:max-h-none',
        )}
      >
        <CategoryNode nodes={categories} level={0} path={[]} />
      </div>
    </aside>
  );
}
