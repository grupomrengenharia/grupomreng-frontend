import Image from 'next/image';
import { NavLink } from '../nav-link';
import Link from 'next/link';
import { CartButton } from '../cart-button';

export function Navbar() {
  return (
    <header className="w-screen px-15 lg:px-30 py-5 bg-black/80">
      <nav className="flex items-center justify-between flex-col gap-10 lg:gap-0 lg:flex-row">
        <Link href="/">
          <div>
            <Image
              src="/images/logo.png"
              alt={'Logo da empresa MR Engenharia'}
              width={100}
              height={100}
            />
          </div>
        </Link>
        <ul className="flex items-center justify-end gap-4 flex-col sm:flex-row">
          <li>
            <NavLink href="/" label="Início" />
          </li>
          <li>
            <NavLink href="/produtos/categorias" label="Produtos" />
          </li>
          <li>
            <NavLink href="/servicos" label="Serviços" />
          </li>
          <li>
            <NavLink href="/cidades" label="Cidades" />
          </li>
          <li>
            <NavLink href="/sobre-nos" label="Sobre nós" />
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
