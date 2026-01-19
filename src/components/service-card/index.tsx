import { Service } from '@/src/@types';

interface Props {
  service: Service;
}

export function ServiceCard({ service }: Props) {
  return (
    <div
      className="
        relative
      bg-black/40 rounded-lg shadow-md
        overflow-hidden

        after :content-['']
        after:absolute after: after:bottom-0 after:left-0
        after:h-1 after:w-full
        after:bg-linear-to-tr after:from-(--brand-color) after:via-orange-600/50 after:to-transparent
        after:rounded-lg
        after:transition-all after:duration-300
        hover:after:h-full
        "
    >
      <div className="z-10 relative p-6 h-full text-center grid grid-rows-4">
        {service.icon}
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="">{service.description}</p>
        <div className="">
          <button>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}
