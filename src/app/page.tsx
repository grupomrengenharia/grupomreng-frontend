import products from '@/data/products.json';
import services from '@/data/services.json';
import { HeroSection, ProductsSection, ServicesSection } from '../components';

export default function Home() {
  return (
    <div className="space-y-10 mb-10">
      <HeroSection />
      <ProductsSection products={products} />
      <ServicesSection services={services} />
    </div>
  );
}
