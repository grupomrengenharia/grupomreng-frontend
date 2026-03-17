import Image from 'next/image';
import { SectionTitle } from '../section-title';
import Link from 'next/link';

export function AboutSection() {
  const yearsOfExperience = new Date().getFullYear() - 2019; // Assuming the company was founded in 2019

  return (
    <section
      id="sobre"
      className="space-y-6 bg-black/80 p-10 rounded-xl flex items-center justify-center"
    >
      <div className="flex flex-col gap-16 max-w-6xl">
        <div className="flex items-center gap-6 justify-evenly">
          <div className="relative w-24 h-full sm:w-32 md:w-48 lg:w-75">
            <Image
              src="/images/robert.png"
              alt="Robert Almerindo - Sócio proprietário da MR Engenharia"
              width={300}
              height={300}
              className="
                w-24
                sm:w-32
                md:w-48
                lg:w-75
                h-auto
                rounded-lg
                shadow-[0_0_25px_rgba(255,80,80,0.6)]
              "
            />
          </div>

          <div className="relative w-24 h-auto sm:w-32 md:w-48 lg:w-75">
            <Image
              src="/images/mariana.png"
              alt="Mariana Cardoso - Sócia proprietária da MR Engenharia"
              width={300}
              height={300}
              className="
                w-24
                sm:w-32
                md:w-48
                lg:w-75
                h-auto
                object-cover
                rounded-md
                shadow-[0_0_20px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.4)]
              "
            />
          </div>
        </div>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <SectionTitle title="Quem somos?" />

          <p>
            Somos uma empresa de engenharia fundada por dois profissionais com
            sólida experiência na área, atuando há mais de {yearsOfExperience}{' '}
            anos no desenvolvimento de soluções técnicas com foco em segurança,
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

        <Link
          href="/sobre"
          className="bg-(--brand-color) cursor-pointer w-max self-center flex items-center gap-2 px-6 py-3 rounded-md font-semibold hover:brightness-90 transition"
        >
          Saiba mais sobre nossa equipe
        </Link>
      </div>
    </section>
  );
}
