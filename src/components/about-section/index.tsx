import Image from 'next/image';
import { SectionTitle } from '../section-title';

export function AboutSection() {
  return (
    <section id="sobre" className="space-y-6 bg-black/80 p-10 rounded-xl">
      <div className="grid grid-cols-5 gap-10">
        <div className="flex items-center gap-5 justify-between col-span-2">
          <Image
            src="/images/robert.png"
            alt="Robert Almerindo - Sócio proprietário da MR Engenharia"
            width={300}
            height={300}
            className="rounded-lg shadow-[0_0_25px_rgba(255,80,80,0.6)]"
          />
          <Image
            src="/images/mariana.png"
            alt="Mariana Cardoso - Sócia proprietária da MR Engenharia"
            width={300}
            height={300}
            className="object-cover rounded-md shadow-[0_0_20px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.4)]"
          />
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed col-span-3">
          <SectionTitle title="Quem somos?" />

          <p>
            Somos uma empresa de engenharia fundada por dois profissionais com
            sólida experiência na área, atuando há mais de 5 anos no
            desenvolvimento de soluções técnicas com foco em segurança,
            conformidade e eficiência.
          </p>

          <p>
            Contamos com uma equipe qualificada e em constante atualização,
            preparada para atender cada projeto de forma personalizada, desde a
            análise inicial até a entrega final.
          </p>

          <p>
            Atuamos em Sistemas de Prevenção e Combate a Incêndio e Pânico
            (PSCIP), Licenciamentos Sanitários, Regularizações, Sistemas de
            Proteção contra Descargas Atmosféricas (SPDA) e Projetos de
            Andaimes, sempre alinhados às normas vigentes e às melhores práticas
            do mercado.
          </p>

          <p>
            Nosso compromisso é oferecer soluções seguras, viáveis e adequadas à
            realidade de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
