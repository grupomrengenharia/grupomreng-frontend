import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full flex items-start justify-center gap-5 bg-(--soft-black) py-10">
      <div className="flex flex-col items-center justify-center gap-6">
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

      <div>
        <div>
          <a
            href="https://www.instagram.com/grupomr.eng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/grupomr.eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
