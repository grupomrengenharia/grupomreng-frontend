import { SectionTitle } from '../section-title';
import { PartnersMarquee } from './partners-marquee';

export function PartnersSection() {
  return (
    <section className="mb-10">
      <SectionTitle title="Clientes e parceiros que confiam em nosso trabalho" />
      <PartnersMarquee />
    </section>
  );
}
