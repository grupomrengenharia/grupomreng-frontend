'use client';

import products from '@/data/products.json';
import services from '@/data/services.json';
import {
  AboutSection,
  AddressSection,
  ContactFormSection,
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
      <ServicesSection services={services} />
      <InstagramSection />
      <AboutSection />
      <AddressSection />
      <ContactFormSection />
      <PartnersSection />
    </div>
  );
}
