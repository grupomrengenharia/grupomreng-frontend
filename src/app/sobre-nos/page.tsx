import Image from 'next/image';
import { IoPeople, IoTrophySharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { FaScaleBalanced, FaTree } from 'react-icons/fa6';
import { TbPresentationAnalytics } from 'react-icons/tb';
import { PartnersMarquee } from '@/src/components/partners-section/partners-marquee';

export default function AboutUsPage() {
  return (
    <section className="min-h-[80vh] flex flex-col gap-10 mb-20">
      <h1 className="font-bold text-2xl">Sobre nós</h1>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[2fr_6fr] lg:gap-20 mb-10">
        <div className="flex items-center justify-center xl:">
          <Image
            src={'/images/socios.png'}
            alt={'Sócios Robert e Mariana'}
            width={450}
            height={450}
            className="rounded-lg shadow-[0_0_25px_rgba(255,80,80,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-10 xl:gap-20">
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Missão</h2>
            <p>
              Entregar soluções de engenharia com excelência, segurança e
              agilidade, superando expectativas e garantindo a satisfação e a
              regularização completa dos nossos clientes.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Visão</h2>
            <p>
              Ser referência nacional em soluções ágeis e eficazes, liderando o
              setor de sistemas de hidrantes e certificações, com impacto
              positivo no desenvolvimento local.
            </p>
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <h2 className="font-bold text-lg">Valores</h2>
            <ul className="flex flex-col justify-between h-full ">
              <li className="flex items-center gap-2">
                <IoPeople size={32} />
                Pessoas - Atrair, desenvolver e reter talentos, reconhecendo em
                cada colaborador nosso maior ativo.
              </li>
              <li className="flex items-center gap-2">
                <FaStar size={32} />
                Espírito de Inovação - Inovação constante, adaptando nossos
                serviços às necessidades dos clientes e antecipando tendências e
                oportunidades.
              </li>
              <li className="flex items-center gap-2">
                <TbPresentationAnalytics size={32} />
                Custos - Controle rigoroso de custos para ganho de escala, maior
                lucratividade e transparência total com nossos clientes.
              </li>
              <li className="flex items-center gap-2">
                <FaScaleBalanced size={32} />
                Ética - Compromisso com responsabilidade, cumprimento das leis e
                respeito ao meio ambiente e à sociedade.
              </li>
              <li className="flex items-center gap-2">
                <IoTrophySharp size={32} />
                Qualidade e Excelência - Uso de tecnologias de ponta para
                garantir a excelência em nossos serviços e processos.
              </li>
              <li className="flex items-center gap-2">
                <FaTree size={32} />
                Desenvolvimento Sustentável - Gestão responsável dos recursos
                ambientais e sociais, gerando valor para as comunidades em que
                atuamos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="font-bold text-2xl">Sobre o Grupo MR Engenharia</h2>
        <p>
          Há mais de 5 anos, o Grupo MR Engenharia atua oferecendo soluções nas
          áreas de segurança e regularização técnica, com foco em qualidade,
          responsabilidade e compromisso em cada projeto.
        </p>
        <p>
          Contamos com uma equipe qualificada e comprometida em proporcionar um
          atendimento próximo, eficiente e alinhado às necessidades de cada
          cliente.
        </p>
        <p>
          Somos especializados em Sistemas de Prevenção e Combate a Incêndio e
          Pânico (PSCIP), Licenciamentos Sanitários, Regularizações, Sistemas de
          Proteção contra Descargas Atmosféricas (SPDA) e Projetos de Andaimes.
          Também acompanhamos constantemente as normas, tecnologias e práticas
          mais seguras do mercado para oferecer soluções atualizadas e
          confiáveis.
        </p>
      </div>

      <div className="">
        <h2 className="font-bold text-2xl">
          Cliente e parceiros que acreditam e confiam em nosso trabalho
        </h2>
        <PartnersMarquee />
      </div>
    </section>
  );
}
