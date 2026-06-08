'use client';

import categories from '@/data/categories.json';
import services from '@/data/services.json';
import gallery from '@/data/gallery.json';

import {
  AboutSection,
  AddressSection,
  ContactFormSection,
  GallerySection,
  HeroSection,
  InstagramSection,
  PartnersSection,
  ProductsSection,
  ServicesSection,
} from '../components';

export default function Home() {
  const baseProducts =
    categories['abrigos-de-hidrante-e-extintor']['abrigos-para-extintor']
      .products;

  return (
    <div className="space-y-10">
      <HeroSection />
      <section>
        <ProductsSection products={baseProducts} />
      </section>
      <GallerySection pictures={gallery} />
      <ServicesSection services={services} />
      <InstagramSection />
      <AboutSection />
      <AddressSection />
      <ContactFormSection />
      <PartnersSection />
    </div>
  );
}
