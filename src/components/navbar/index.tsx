import Image from 'next/image';
import { NavLink } from '../nav-link';

export function Navbar() {
  return (
    <header className="w-screen px-30 py-5 bg-black/80 mb-10">
      <nav className="flex items-center justify-between">
        <div>
          <Image
            src={'/images/logo.png'}
            alt={'Logo da empresa MR Engenharia'}
            width={100}
            height={100}
          />
        </div>
        <ul className="flex items-center justify-end gap-4">
          <li>
            <NavLink href="/" label="Início" />
          </li>
          <li>
            <NavLink href="/produtos" label="Produtos" />
          </li>
          <li>
            <NavLink href="/servicos" label="Serviços" />
          </li>
          <li>
            <NavLink href="/cidades" label="Cidades" />
          </li>
          <li>
            <NavLink href="/clientes" label="Clientes" />
          </li>
          <li>
            <NavLink href="/sobre" label="Sobre nós" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
