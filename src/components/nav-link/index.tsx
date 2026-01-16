import Link from 'next/link';

interface Props {
  href: string;
  label: string;
}

export function NavLink({ href, label }: Props) {
  return (
    <Link href={href} className="transition hover:text-(--primary-color)">
      {label}
    </Link>
  );
}
