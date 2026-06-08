import type { Metadata } from 'next';
import productsById from '@/data/products-by-id.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = productsById.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Produto Não Encontrado | MR Engenharia',
      description: 'O produto que você procura não foi encontrado.',
    };
  }

  return {
    title: product.name,
    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://grupomreng.com/produtos/${product.id}`,
      type: 'website',

      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const product = productsById.find((p) => p.id === id);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.name,
    description: product?.description,
    image: product?.images,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
