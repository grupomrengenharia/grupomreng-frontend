/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Service } from '@/src/@types';
import { useCart } from '@/src/hooks';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface Props {
  service: Service;
  icon?: React.ReactNode;
}

export function ServiceCard({ service, icon }: Props) {
  const { addServiceToCart, removeServiceFromCart, findCartService } =
    useCart();

  const [hydrated, setHydrated] = useState(false);

  const isServiceInCart = hydrated && !!findCartService(service.id);

  const handleAddToCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'addToCart',
      data: service,
    });

    addServiceToCart(service);
  }, [addServiceToCart, service]);

  const handleRemoveFromCart = useCallback(() => {
    sendGAEvent('event', 'buttonClicked', {
      buttonName: 'removeFromCart',
      data: service,
    });

    removeServiceFromCart(service.id);
  }, [removeServiceFromCart, service]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div
      className="
        relative
      bg-(--brand-color) rounded-lg shadow-md
        overflow-hidden

        after :content-['']
        after:absolute after: after:bottom-0 after:left-0
        after:h-1 after:w-full
        after:rounded-lg
        after:transition-all after:duration-300
        hover:after:h-full
        "
    >
      <div className="z-10 relative p-6 h-full text-center grid gap-4 grid-rows-[1fr_1fr_2fr_0.5fr]">
        <div className="self-center justify-self-center flex items-center justify-center w-20 h-20 bg-black/50 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className=" p-4 rounded-lg bg-black/55 flex justify-center items-center">
          {service.description}
        </p>
        <div
          className="py-4 flex items-center justify-center"
          suppressHydrationWarning
        >
          {isServiceInCart ? (
            <button
              className="cursor-pointer px-6 py-3 rounded-md font-semibold bg-white text-black transition min-w-full border-2 border-white/20"
              onClick={handleRemoveFromCart}
            >
              <span className="flex justify-center items-center gap-2">
                No carrinho <FaCheck />
              </span>
            </button>
          ) : (
            <button
              className="cursor-pointer px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition min-w-full border-2 border-white/20"
              onClick={handleAddToCart}
            >
              Solicitar orçamento
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
