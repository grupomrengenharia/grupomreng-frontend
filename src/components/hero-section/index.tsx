import Image from 'next/image';

export function HeroSection() {
  return (
    <main
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        min-h-[60svh]
        lg:mb-15
      "
    >
      <div className="space-y-6">
        <h1 className="text-(--brand-color) uppercase text-lg">
          Grupo M.R. Engenharia
        </h1>

        <p className="uppercase text-5xl lg:text-3xl xl:text-5xl leading-snug">
          Sistemas contra <span className="text-(--brand-color)">incêndio</span>{' '}
          e <span className="text-(--brand-color)">pânico</span>: Projeto,
          execução e{' '}
          <span className="text-(--brand-color)">certificado em segurança</span>{' '}
          com <span className="text-(--brand-color)">garantia estendida</span>!
        </p>

        <p className="text-(--text-color-secondary)">
          Cuidamos de todo o processo de instalação de hidrantes, desde o
          fornecimento do material até a entrega do certificado.
        </p>

        <p className="text-(--text-color-secondary)">
          Realizamos o serviço em até 7 dias, com garantia de 5 anos.
        </p>

        <div className="mt-16 flex items-start gap-4">
          <button className="bg-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition">
            Solicite um orçamento agora!
          </button>
          <button className="bg-white text-black cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition">
            Conheça nossos serviços
          </button>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute right-1/8">
          <Image
            src={'/images/hero-image-1.jpg'}
            alt={'hero-image-1'}
            width={300}
            height={300}
            className="rounded-lg shadow-[0_0_25px_rgba(255,80,80,0.6)]"
          />
        </div>
        <div className="absolute top-25 left-1/8">
          <Image
            src={'/images/hero-image-2.jpg'}
            alt={'hero-image-2'}
            width={300}
            height={300}
            className="object-cover rounded-md shadow-[0_0_20px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.4)]"
          />
        </div>
      </div>
    </main>
  );
}
