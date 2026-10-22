import type { Product } from '../../types/product';
import { formatInstallment, formatPrice } from '../../utils/format';
import './ProductCard.scss';

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="card">
      <button type="button" className="card__media" onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </button>
      <h3 className="card__name">{product.productName}</h3>
      <div className="card__prices">
        <p className="card__price">{formatPrice(product.price)}</p>
        <p className="card__installment">{formatInstallment(product.price)}</p>
        <p className="card__shipping">Frete grátis</p>
      </div>
      <button type="button" className="card__buy" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}
