'use client';
import gallery from '@/data/gallery.json';

import { scrollToSection } from '@/src/utils';
import Image from 'next/image';

export function HeroSection() {
  return (
    <main
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        min-h-[60svh]
        lg:mb-15
        px-10 lg:px-20
      "
    >
      <div className="space-y-6">
        <h1 className="text-(--brand-color) uppercase text-lg">
          Grupo M.R. Engenharia
        </h1>

        <p className="uppercase lg:text-5xl text-3xl xl:text-5xl leading-snug">
          Sistemas contra <span className="text-(--brand-color)">incêndio</span>{' '}
          e <span className="text-(--brand-color)">pânico</span>: Projeto,
          execução e{' '}
          <span className="text-(--brand-color)">certificado em segurança</span>{' '}
          com <span className="text-(--brand-color)">garantia estendida</span>!
        </p>

        <p className="text-(--text-color-secondary)">
          Cuidamos de todo o processo de instalação de hidrantes, desde o
          fornecimento do material até a entrega do certificado.
        </p>

        <p className="text-(--text-color-secondary)">
          Realizamos o serviço em até 7 dias, com garantia de 5 anos.
        </p>

        <div className="mt-16 flex items-start gap-4 md:flex-row flex-col">
          <a
            className="bg-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition w-full sm:w-auto text-center"
            href="https://wa.me/5567991170917?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20dos%20servi%C3%A7os%20oferecidos%20pela%20MR."
            target="_blank"
          >
            Solicite um orçamento agora!
          </a>
          <button
            onClick={() => scrollToSection('services-section')}
            className="bg-white text-black cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition w-full sm:w-auto"
          >
            Conheça nossos serviços
          </button>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute right-1/8">
          <Image
            src={gallery[2].url}
            alt={gallery[2].description}
            width={300}
            height={300}
            className="rounded-lg shadow-[0_0_25px_rgba(255,80,80,0.6)]"
          />
        </div>
        <div className="absolute top-25 left-1/8">
          <Image
            src={gallery[0].url}
            alt={gallery[0].description}
            width={300}
            height={300}
            className="object-cover rounded-md shadow-[0_0_20px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.4)]"
          />
        </div>
      </div>
    </main>
  );
}
