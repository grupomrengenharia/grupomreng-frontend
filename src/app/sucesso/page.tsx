'use client';

import { ProductsSection } from '@/src/components';
import Link from 'next/link';
import categories from '@/data/categories.json';
import { sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

export default function SuccessPage() {
  const baseProducts = categories['sinalizacao-de-emergencia'].products;

  useEffect(() => {
    sendGAEvent('event', 'generate_lead', {
      context: 'success_page',
    });
  }, []);

  return (
    <section className="min-h-[80vh] py-20 flex flex-col gap-20">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-2xl">Pronto!</h1>
        <p className="text-xl">
          Já recebemos sua solicitação e logo nosso time entrará em contato com
          você
        </p>
        <Link
          href="/"
          replace
          className="bg-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition w-full sm:w-auto text-center"
        >
          <span>Voltar ao início</span>
        </Link>
      </div>

      <div>
        <ProductsSection products={baseProducts} title="Confira também" />
      </div>
    </section>
  );
}
