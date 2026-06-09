import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex flex-col gap-6 items-center justify-center">
      <h1 className="font-bold text-2xl">
        Desculpe, a página que você procurou não foi encontrada :/
      </h1>
      <Link href="/">
        <span className="bg-(--brand-color) cursor-pointer px-6 py-3 rounded-md font-semibold hover:brightness-90 transition w-full sm:w-auto text-center">
          Voltar ao início
        </span>
      </Link>
    </section>
  );
}
