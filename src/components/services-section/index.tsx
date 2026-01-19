import { Service } from '@/src/@types';
import { ServiceCard } from '../service-card';
import { SectionTitle } from '../section-title';

interface Props {
  services: Service[];
}

export function ServicesSection({ services }: Props) {
  return (
    <section className="space-y-2">
      <SectionTitle title="Serviços" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
