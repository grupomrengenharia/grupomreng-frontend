import { MapPin } from 'lucide-react';
import { SectionTitle } from '../section-title';

export function AddressSection() {
  return (
    <section className="space-y-7">
      <SectionTitle title="Onde estamos" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806716.700227201!2d-59.75892474187269!3d-14.709103144919332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949099ddf19b391d%3A0x9d8696fc9274da43!2sMR%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1768856182468!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        className="border-0 w-full h-112.5"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex items-center justify-center gap-6">
        <address>
          R. Bruno García, 3059 - Jardim Primaveril
          <br />
          Três Lagoas - MS, 79611-080
        </address>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=R.+Bruno+García,+3059,+Três+Lagoas+-+MS"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-(--brand-color) cursor-pointer flex items-center gap-2 px-6 py-3 rounded-md font-semibold hover:brightness-90 transition"
        >
          Ver rotas no Google Maps <MapPin />
        </a>
      </div>
    </section>
  );
}
