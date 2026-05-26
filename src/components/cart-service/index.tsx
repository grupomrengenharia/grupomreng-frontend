import { Service } from '@/src/@types';
import { useCart } from '@/src/hooks';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

interface Props {
  service: Service;
}

export function CartService({ service }: Readonly<Props>) {
  const { removeServiceFromCart } = useCart();

  return (
    <div className="flex items-center w-full gap-5 bg-slate-400/5 p-3 rounded-md h-36">
      <div className="relative w-24 h-28 flex items-center justify-center overflow-hidden">
        <VscWorkspaceTrusted size={48} />
      </div>

      <Link
        href={`/servicos/${service.id}`}
        className="flex-1 flex items-center hover:bg-slate-400/10 rounded-md transition-colors h-full p-2 px-4"
      >
        <div className="flex flex-col justify-center flex-2 gap-1 h-full">
          <span className="font-bold text-lg">{service.title}</span>
          <p>{service.description}</p>
        </div>
      </Link>

      <div className="flex gap-24 items-center mr-6">
        <div className="cursor-pointer hover:text-red-500 transition-colors">
          <Trash onClick={() => removeServiceFromCart(service.id)} size={20} />
        </div>
      </div>
    </div>
  );
}
