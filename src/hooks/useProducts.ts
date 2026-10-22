import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import type { Product } from '../types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchProducts(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!controller.signal.aborted && err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { products, loading, error };
}
