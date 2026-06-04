'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CategoryItemProps, CategoryNodeProps, CategoryTree } from './types';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function CategoryNode({
  nodes,
  level,
  path,
}: Readonly<CategoryNodeProps>) {
  return (
    <ul className="space-y-1">
      {Object.entries(nodes)
        .filter(([key]) => key !== 'products')
        .map(([name, value]) => (
          <CategoryItem
            key={name}
            name={name}
            node={value as CategoryTree}
            level={level}
            path={path}
          />
        ))}
    </ul>
  );
}

export function CategoryItem({
  name,
  node,
  level,
  path,
}: Readonly<CategoryItemProps>) {
  const [open, setOpen] = useState(false);

  const currentPath = [...path, name];

  const hasChildren = Object.entries(node).some(([key]) => key !== 'products');
  const formatedName =
    name.replaceAll('-', ' ').substring(0, 1).toUpperCase() +
    name.replaceAll('-', ' ').substring(1);

  const pathname = usePathname();
  const href = `/produtos/categorias/${currentPath.join('/')}`;

  const activeStatus =
    pathname === href || pathname.startsWith(`${href}/`) ? 'active' : 'default';

  const baseStyle =
    'cursor-pointer hover:text-(--brand-color) transition-colors border-l-4 h-10 flex text-start items-center min-w-full text-sm pl-6';

  const variantStyles: string = {
    active:
      'text-(--brand-color) border-(--brand-color) bg-linear-to-r from-(--brand-color)/10 via-(--brand-color)/5 to-transparent',
    default: 'border-none text-gray-300/70',
  }[activeStatus];

  const mainCategoryStyles = level === 0 ? 'font-semibold' : '';

  return (
    <li className="flex flex-col">
      <div
        style={{
          paddingLeft: `${level * 12}px`,
        }}
      >
        {hasChildren ? (
          <button onClick={() => setOpen(!open)} className="w-full">
            <span
              className={twMerge(baseStyle, mainCategoryStyles, variantStyles)}
            >
              {formatedName}
            </span>
          </button>
        ) : (
          <Link href={`/produtos/categorias/${currentPath.join('/')}`}>
            <span
              className={twMerge(baseStyle, mainCategoryStyles, variantStyles)}
            >
              {formatedName}
            </span>
          </Link>
        )}
      </div>

      <div className={twMerge('')}>
        {open && hasChildren && (
          <CategoryNode nodes={node} level={level + 1} path={currentPath} />
        )}
      </div>
    </li>
  );
}
