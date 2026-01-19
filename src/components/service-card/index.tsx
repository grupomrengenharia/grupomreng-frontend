import { Service } from '@/src/@types';

interface Props {
  service: Service;
  icon?: React.ReactNode;
}

export function ServiceCard({ service, icon }: Props) {
  return (
    <div
      className="
        relative
      bg-black/75 rounded-lg shadow-md
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
      <div className="z-10 relative p-6 h-full text-center grid gap-4 grid-rows-[1fr_1fr_2fr_0.5fr]">
        <div className="flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="">{service.description}</p>
        <div className="py-4 flex items-center justify-center">
          <button className="cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition min-w-full border-2 border-white/20 hover:bg-black/60">
            Solicitar orçamento
          </button>
        </div>
      </div>
    </div>
  );
}
