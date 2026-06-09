import categories from '@/data/categories.json';
import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { CategoryTree } from '../../components/types';
import { findCategory } from '../../components/utils';
import { ProductsView } from '../../components/products-view';
import { sendGAEvent } from '@next/third-parties/google';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const categoryName = slug
    .at(-1)
    ?.replaceAll('-', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const description = `Confira os melhores produtos da categoria ${categoryName}. Encontre ofertas, novidades e entrega rápida.`;
  const title = categoryName
    ? `${categoryName} | MR Engenharia`
    : 'Categorias | MR Engenharia';

  return {
    title,
    description,
    keywords: [
      categoryName ?? '',
      'hidrantes',
      'engenharia',
      'ofertas',
      'produtos',
      'incêndios',
    ],

    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'pt_BR',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `https://grupomreng.com/produtos/categorias/${slug.join('/')}`,
    },
  };
}

export default async function ProductsByCategory({ params }: Readonly<Props>) {
  const { slug } = await params;

  const tree = categories as unknown as CategoryTree;
  const categoryName = slug
    .at(-1)
    ?.replaceAll('-', ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const category = findCategory(tree, slug);

  const description = `Confira os melhores produtos da categoria ${categoryName}.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryName,
    description,
  };

  if (
    !category ||
    !('products' in category) ||
    !Array.isArray(category.products)
  ) {
    return notFound();
  }

  sendGAEvent('event', 'page_view', {
    page: 'categorias',
    data: {
      category: slug,
    },
  });

  return (
    <div className="flex">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="flex-1">
        <ProductsView products={category.products} />
      </main>
    </div>
  );
}
