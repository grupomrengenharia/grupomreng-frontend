'use client';

import { ContactForm } from '@/src/components';
import { api, ContactFormData } from '@/src/lib';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback, useEffect } from 'react';
import { toast } from 'sonner';

const cities = [
  {
    name: 'Três Lagoas',
    state: 'MS',
    description:
      'Elaboração e regularização de projetos de prevenção e combate a incêndio, sistemas de hidrantes, extintores e adequação às exigências do Corpo de Bombeiros.',
  },
  {
    name: 'Andradina',
    state: 'SP',
    description:
      'Desenvolvimento de projetos de segurança contra incêndio e pânico para empresas, comércios, indústrias e condomínios.',
  },
  {
    name: 'Inocência',
    state: 'MS',
    description:
      'Projetos técnicos de combate a incêndio, dimensionamento de sistemas preventivos e suporte para obtenção de licenças e aprovações.',
  },
  {
    name: 'Brasilândia',
    state: 'MS',
    description:
      'Soluções completas em prevenção contra incêndio, incluindo hidrantes, sinalização de emergência, iluminação e rotas de fuga.',
  },
  {
    name: 'Ribas do Rio Pardo',
    state: 'MS',
    description:
      'Projetos de segurança contra incêndio e pânico para empreendimentos residenciais, comerciais, industriais e do setor florestal.',
  },
  {
    name: 'Água Clara',
    state: 'MS',
    description:
      'Consultoria e elaboração de projetos de prevenção e combate a incêndio, garantindo conformidade com as normas técnicas vigentes.',
  },
];

export default function CitiesPage() {
  const handleSubmit = useCallback(async (data: ContactFormData) => {
    try {
      await api.post('/contact-form', {
        customerData: data,
      });

      toast.info('Pronto! Recebemos seu contato e retornaremos em breve.');
    } catch {
      toast.error(
        'Houve um erro ao processar sua solicitação. Tente novamente em alguns segundos',
      );
    }
  }, []);

  useEffect(() => {
    sendGAEvent('event', 'page_view', {
      page: 'cidades',
    });
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Área de Atuação
        </span>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Cidades atendidas pela Grupo MR Engenharia
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Prestamos serviços de engenharia, projetos e execução de obras em
          diversas cidades do Mato Grosso do Sul e interior de São Paulo,
          oferecendo atendimento próximo e soluções personalizadas.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <article
            key={city.name}
            className="rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold">
              {city.name} - {city.state}
            </h2>

            <p className="text-muted-foreground">{city.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-20 rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">
          Sua cidade não está na lista?
        </h2>

        <p className="mb-6">
          Entre em contato conosco para verificar a disponibilidade de
          atendimento na sua região.
        </p>

        <div className="text-start">
          <ContactForm handleSubmit={handleSubmit} clearAfterSubmit />
        </div>
      </section>
    </main>
  );
}
