import { useRef, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Icon from '../Icon/Icon';
import type { Product } from '../../types/product';
import './Showcase.scss';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];
const STEP = 322; // largura do card (304) + gap (18)

interface Props {
  id?: string;
  title: string;
  products: Product[];
  loading: boolean;
  error: string | null;
  withTabs?: boolean;
  onSelect: (product: Product) => void;
}

export default function Showcase({ id, title, products, loading, error, withTabs, onSelect }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const headingId = `${id ?? 'vitrine'}-title`;

  const scroll = (dir: 1 | -1) => trackRef.current?.scrollBy({ left: dir * STEP, behavior: 'smooth' });

  return (
    <section id={id} className="showcase section container--wide" aria-labelledby={headingId}>
      <header className="showcase__header">
        <div className="showcase__title-row">
          <span className="showcase__line" aria-hidden="true" />
          <h2 id={headingId} className="showcase__title">{title}</h2>
          <span className="showcase__line" aria-hidden="true" />
        </div>
        {!withTabs && <a href="#" className="showcase__all">Ver todos</a>}
      </header>

      {withTabs && (
        <div className="showcase__tabs" role="tablist" aria-label="Categorias de produtos">
          {TABS.map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={tab === activeTab}
              className={`showcase__tab ${tab === activeTab ? 'is-active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      )}

      {loading && <p role="status" className="showcase__feedback">Carregando produtos…</p>}
      {error && <p role="alert" className="showcase__feedback">{error}</p>}

      {!loading && !error && (
        <div className="showcase__carousel">
          <button type="button" className="showcase__arrow showcase__arrow--prev" onClick={() => scroll(-1)} aria-label="Produtos anteriores">
            <Icon name="chevron-left" size={16} />
          </button>
          <ul className="showcase__track" ref={trackRef}>
            {products.map((product) => (
              <li key={product.productName}>
                <ProductCard product={product} onSelect={onSelect} />
              </li>
            ))}
          </ul>
          <button type="button" className="showcase__arrow showcase__arrow--next" onClick={() => scroll(1)} aria-label="Próximos produtos">
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
