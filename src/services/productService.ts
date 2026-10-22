import type { Product, ProductsResponse } from '../types/product';

const REMOTE_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

// Em desenvolvimento usa o proxy do Vite (evita CORS); em produção chama a URL direta.
const PRODUCTS_URL = import.meta.env.DEV ? '/api/produtos' : REMOTE_URL;

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });
  if (!response.ok) throw new Error(`Erro ao buscar produtos (${response.status})`);
  const data: ProductsResponse = await response.json();
  if (!data.success) throw new Error('A API retornou uma resposta sem sucesso.');
  return data.products;
}
