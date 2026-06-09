'use client';

import {
  CartProduct,
  CartService,
  ContactForm,
  SectionTitle,
} from '@/src/components';
import { useCart } from '@/src/hooks';
import { api, ContactFormData } from '@/src/lib';
import Link from 'next/link';
import { useMemo } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const { products, services, clearCart, itemsCount } = useCart();

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
    try {
      if (itemsCount === 0) {
        toast.info('Adicione pelo menos um item no carrinho!');
        return;
      }

      await api.post('/quote-form', {
        customerData: data,
        cartData: {
          products: products.map((p) => ({
            id: p.id,
            name: p.name,
            quantity: p.quantity,
            variationCode: p.variationCode,
          })),
          services: services.map((s) => ({
            id: s.id,
            name: s.title,
          })),
        },
      });

      clearCart();
    } catch {
      toast.error(
        'Houve um erro ao processar sua solicitação. Tente novamente em alguns segundos',
      );
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_2fr] 2xl:grid-cols-[3fr_1fr] gap-10 section min-h-[70vh] mb-20 xl:gap-20 pt-10 pb-10">
      <div className="flex flex-col gap-10">
        <SectionTitle title="Meu carrinho" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2>Produtos</h2>
              <Link href="/produtos/categorias" className="">
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

      <div className="bg-black/65 p-6 rounded-lg text-neutral-300 h-max flex flex-col justify-between gap-5">
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
