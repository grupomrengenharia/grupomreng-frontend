import { MapPin } from 'lucide-react';
import {} from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full grid grid-cols-4 gap-10 bg-(--soft-black) py-10 px-20">
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="font-bold text-lg">Onde estamos</h2>
        <address>
          R. Bruno García, 3059 - Jardim Primaveril - Três Lagoas - MS,
          79611-080
        </address>

        <a
          href="https://g.page/r/CUPadJL8loadEAE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-(--brand-color) cursor-pointer flex items-center gap-2 px-6 py-3 rounded-md font-semibold hover:brightness-90 transition"
        >
          Ver rotas no Google Maps <MapPin />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">Nos acompanhe nas redes sociais</h2>
        <div>
          <a
            href="https://www.instagram.com/grupomr.eng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2">
              <FaInstagram size={24} />
              Instagram
            </span>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/grupomr.eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2">
              <FaFacebookSquare size={24} />
              Facebook
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">Fale conosco</h2>
        <p className="text-(--text-color-secondary)">
          Para orçamentos, dúvidas ou mais informações, entre em contato conosco
          por meio dos seguintes canais:
        </p>
        <ul className="list-disc list-inside text-(--text-color-secondary)">
          <li>Robert Almerindo: (67) 9207-2992</li>
          <li>Mariana Cardoso: (67) 9117-0917</li>
          <li>Fixo: (67) 2104-2653</li>
          <li>
            Email:
            <a
              href="mailto:contato@grupomr.eng.br"
              className="text-(--brand-color) hover:underline"
            >
              contato@grupomr.eng.br
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
