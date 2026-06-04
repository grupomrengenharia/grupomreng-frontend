/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryTree } from './types';

export function findCategory(
  tree: CategoryTree,
  path: string[],
): CategoryTree | null {
  let current: CategoryTree = tree;

  for (const segment of path) {
    const next = current[segment];

    if (!next || Array.isArray(next)) {
      return null;
    }

    current = next;
  }

  return current;
}
