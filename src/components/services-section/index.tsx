'use client';

import { Service } from '@/src/@types';

import { SectionTitle } from '../section-title';
import { Info } from 'lucide-react';
import Link from 'next/link';
import { ServiceCard } from '../service-card';

interface Props {
  services: Service[];
}

export function ServicesSection({ services }: Props) {
  return (
    <section className="space-y-2" id="services-section">
      <SectionTitle title="Serviços" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.slice(0, 5).map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            icon={<Info size={40} />}
          />
        ))}
      </div>
      <div className="mt-10 flex">
        <Link
          href="/servicos"
          className="hover:bg-(--brand-color) border-white/20 border-2 hover:border-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition min-w-full text-center"
        >
          Ver todos os serviços
        </Link>
      </div>
    </section>
  );
}
