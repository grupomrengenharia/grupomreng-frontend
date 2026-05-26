'use client';

import {
  CartProduct,
  CartService,
  ContactForm,
  SectionTitle,
} from '@/src/components';
import { useCart } from '@/src/hooks';
import { ContactFormData } from '@/src/lib';
import Link from 'next/link';
import { useMemo } from 'react';

export default function CartPage() {
  const { products, services } = useCart();

  const renderedProducts = useMemo(() => {
    if (products.length === 0) {
      return (
        <div>
          <span>Sem produtos no carrinho</span>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    );
  }, [products]);

  const renderedServices = useMemo(() => {
    if (services.length === 0) {
      return (
        <div>
          <span>Sem serviços no carrinho</span>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-5">
        {services.map((service) => (
          <CartService key={service.id} service={service} />
        ))}
      </div>
    );
  }, [services]);

  const handleSubmit = async (data: ContactFormData) => {
    console.log('Form data:', data);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend ou processá-los conforme necessário.
    // to-do: enviar e-mail e enviar pedido pro whatsapp
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 section min-h-[70vh] mb-20 xl:gap-20">
      <div className="flex flex-col gap-10">
        <SectionTitle title="Meu carrinho" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2>Produtos</h2>
              <Link href="/produtos" className="">
                <span className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition">
                  Adicionar mais
                </span>
              </Link>
            </div>
            <div>{renderedProducts}</div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2>Serviços</h2>
              <Link href="/servicos" className="">
                <span className="bg-(--primary-color) text-white text-xs px-4 py-2 rounded uppercase font-semibold cursor-pointer hover:bg-(--primary-color-dark) transition">
                  Adicionar mais
                </span>
              </Link>
            </div>
            <div>{renderedServices}</div>
          </div>
        </div>
      </div>

      <div className="bg-black/65 p-6 rounded-lg text-neutral-300 max-h-[80vh] flex flex-col justify-between gap-5">
        <h2 className="text-lg font-bold">Finalizar pedido</h2>
        <ContactForm handleSubmit={handleSubmit} />
        <p className="text-sm text-center">
          Entraremos em contato com você em breve para confirmar os detalhes do
          seu pedido e fornecer um orçamento personalizado. Obrigado por
          escolher a MR Engenharia!
        </p>
      </div>
    </div>
  );
}
