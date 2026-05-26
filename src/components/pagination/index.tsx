'use client';

import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  renderItem: (item: T) => React.ReactNode;
}

export function Pagination<T>({
  items,
  itemsPerPage = 10,
  renderItem,
}: Readonly<PaginationProps<T>>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return items.slice(start, end);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;

      setCurrentPage(page);
    },
    [totalPages],
  );

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-20">
        {paginatedItems.map(renderItem)}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-neutral-800 disabled:opacity-50 cursor-pointer transition-all hover:opacity-75"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const activeStatus = currentPage === page ? 'active' : 'default';

          const styles = {
            active: 'bg-(--primary-color) text-white',
            default:
              'bg-neutral-800 hover:bg-(--primary-color) transitional-all',
          }[activeStatus];

          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={twMerge(
                'px-4 py-2 rounded transition cursor-pointer',
                styles,
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-neutral-800 disabled:opacity-50 cursor-pointer transition-all hover:opacity-75"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
