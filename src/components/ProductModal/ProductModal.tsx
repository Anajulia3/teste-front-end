import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/format';
import './ProductModal.scss';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Fechar">
          <span /><span />
        </button>

        <img className="modal__image" src={product.photo} alt={product.productName} />

        <div className="modal__content">
          <div className="modal__info">
            <h2 id="modal-title" className="modal__name">{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>
            <p className="modal__description">{product.descriptionShort}</p>
            <a href="#" className="modal__link">Veja mais detalhes do produto &gt;</a>
          </div>

          <div className="modal__actions">
            <div className="modal__quantity">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade">
                <span className="modal__minus" />
              </button>
              <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Aumentar quantidade">
                <span className="modal__plus" />
              </button>
            </div>
            <button type="button" className="modal__buy" onClick={onClose}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
