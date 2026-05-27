'use client';

import products from '@/data/products.json';
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
  return (
    <div className="space-y-10">
      <HeroSection />
      <ProductsSection products={products} />
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
