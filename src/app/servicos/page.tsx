'use client';

import services from '@/data/services.json';
import { Pagination, ServiceCard } from '@/src/components';
import { sendGAEvent } from '@next/third-parties/google';
import { Info } from 'lucide-react';

export default function ServicesPage() {
  sendGAEvent('event', 'page_view', {
    page: 'servicos',
  });

  return (
    <section className="flex flex-col gap-10 section min-h-[80vh] mt-10">
      <h1 className="font-bold text-lg">Nossos Serviços</h1>

      <Pagination
        items={services}
        renderItem={(service) => (
          <ServiceCard
            key={service.id}
            service={service}
            icon={<Info size={40} />}
          />
        )}
        itemsPerPage={10}
      />
    </section>
  );
}
