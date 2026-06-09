'use client';

import { Picture } from '@/src/@types';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  pictures: Picture[];
}

export function GallerySection({ pictures }: Readonly<Props>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;

    const itemWidth = 344; // largura do card + gap

    const index = Math.round(scrollLeft / itemWidth);

    setCurrentIndex(index);
  }, []);

  const scrollToIndex = useCallback(
    (index: number, from: 'picture' | 'bullet') => {
      if (!containerRef.current) return;

      sendGAEvent('event', 'picture_view', {
        context: 'gallery_home',
        data: {
          index,
          from,
        },
      });

      const itemWidth = 344;

      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });

      setCurrentIndex(index);
    },
    [],
  );

  return (
    <section className="space-y-4">
      <h1 className="font-bold text-lg">Projetos recentes</h1>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="
          flex
          gap-6
          overflow-x-auto
          snap-x
          snap-mandatory
          no-scrollbar
          scroll-smooth
          cursor-pointer
        "
      >
        {pictures.map((picture, index) => {
          const activeStatus = currentIndex === index ? 'active' : 'default';

          const styles = {
            active: 'border-2 border-(--brand-color)',
            default: 'bg-neutral-500',
          }[activeStatus];

          return (
            <div
              key={picture.id}
              className={twMerge(
                'relative min-w-75 h-100 rounded-xl overflow-hidden shrink-0 snap-start ',
                styles,
              )}
              onClick={() => scrollToIndex(index, 'picture')}
            >
              <Image
                alt={picture.description}
                src={picture.url}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2">
        {pictures.map((picture, index) => {
          const activeStatus = currentIndex === index ? 'active' : 'default';

          const styles = {
            active: 'bg-white w-6',
            default: 'bg-neutral-500',
          }[activeStatus];

          return (
            <button
              key={picture.id}
              onClick={() => scrollToIndex(index, 'bullet')}
              className={twMerge(
                'h-2.5 w-2.5 rounded-full transition-all cursor-pointer hover:opacity-75',
                styles,
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
