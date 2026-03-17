import { SectionTitle } from '../section-title';

export function AddressSection() {
  return (
    <section className="space-y-7 mb-10">
      <SectionTitle title="Onde estamos" />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.6693302677515!2d-51.687354490924974!3d-20.800991067424455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099ddf19b391d%3A0x9d8696fc9274da43!2sMR%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1773756667411!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="border-0 w-full h-112.5"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex items-center justify-center gap-6">
        <address>
          R. Bruno García, 3059 - Jardim Primaveril - Três Lagoas - MS,
          79611-080
        </address>
      </div>
    </section>
  );
}
