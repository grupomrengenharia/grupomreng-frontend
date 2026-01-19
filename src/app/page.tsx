import products from '@/data/products.json';
import services from '@/data/services.json';
import {
  AboutSection,
  AddressSection,
  HeroSection,
  InstagramSection,
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
    </div>
  );
}
