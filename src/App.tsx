import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Showcase from './components/Showcase/Showcase';
import Banners from './components/Banners/Banners';
import Brands from './components/Brands/Brands';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import ProductModal from './components/ProductModal/ProductModal';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const showcaseProps = { products, loading, error, onSelect: setSelected };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Showcase id="vitrine" title="Produtos relacionados" withTabs {...showcaseProps} />
        <Banners />
        <Showcase id="vitrine-2" title="Produtos relacionados" {...showcaseProps} />
        <Banners />
        <Brands />
        <Showcase id="vitrine-3" title="Produtos relacionados" {...showcaseProps} />
        <Newsletter />
      </main>
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
