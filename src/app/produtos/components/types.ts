import { Product } from '@/src/@types';

export interface CategoryNodeProps {
  nodes: CategoryTree;
  level: number;
  path: string[];
}

export interface CategoryTree {
  products?: Product[];
  [category: string]: CategoryTree | Product[] | undefined;
}

export interface CategoryItemProps {
  name: string;
  node: CategoryTree;
  level: number;
  path: string[];
}
