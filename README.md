# Teste Front-End Econverse

Página em **React + TypeScript + Sass** (Vite) construída a partir do layout do Figma. A vitrine consome o `produtos.json` da Econverse e, ao clicar em um produto, abre um modal com as informações dele.

## Pré-requisitos
- Node.js >= 18 e npm

## Como rodar
```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
```

## Build e verificação
```bash
npm run build      
npm run preview    
```
Não há testes automatizados; a verificação é o `tsc` do build e a conferência visual contra o Figma.

## Estrutura
```
src/
├── components/   # Header, Hero, Categories, Showcase, ProductCard, ProductModal,
│                 # Banners, Brands, Newsletter, Footer, Logo, Icon (cada um com seu .scss)
├── hooks/        # useProducts: estado de loading, erro e dados
├── services/     # productService: chamada ao JSON
├── types/        # interfaces TypeScript
├── utils/        # formatação de preço e parcelas
└── styles/       # variáveis (cores/fontes do Figma) e estilos globais
public/images/    # imagens exportadas do Figma e otimizadas
```

## Consumo de API e CORS
O endpoint remoto oficial da Econverse não envia cabeçalhos CORS (`Access-Control-Allow-Origin`).
- **Desenvolvimento e Preview local:** O `vite.config.ts` gerencia isso de forma transparente através de um proxy reverso em `/api/produtos` apontando para o servidor da Econverse, tanto no comando `npm run dev` quanto no `npm run preview`.
- **Produção e Deploy Externo:** O serviço `productService.ts` realiza a chamada direta à URL remota. Caso o projeto seja publicado em um provedor de hospedagem externo (como Vercel, Netlify ou GitHub Pages), o navegador bloqueará a requisição por CORS, exigindo que o provedor tenha uma regra de rewrite/proxy configurada (por exemplo, `vercel.json` ou `_redirects`).

## Decisões Técnicas
- **Sass (BEM):** Sem bibliotecas de terceiros (Bootstrap, Tailwind, etc.); estilos organizados em módulos `.scss` e tokens/variáveis em `src/styles/_variables.scss`.
- **Hook useProducts & React StrictMode:** O hook gerencia cancelamento via `AbortController` e garante que montagens duplas em StrictMode não deixem o estado de `loading` ou `products` inconsistente.
- **Acessibilidade & Semântica:** Uso correto de landmarks HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), hierarquia com único `h1`, textos alternativos (`alt`), labels em inputs e botões. O modal implementa `role="dialog"`, `aria-modal="true"`, foco automático inicial, fechamento com `Esc`, clique fora ou botão `×`, e contenção de foco com tecla `Tab`.
- **SEO:** Metadados completos no `index.html` (`lang="pt-BR"`, `title`, `meta description`, Open Graph).
- **Responsividade:** layout pensado para 1440px (conforme o Figma), com ajustes por `@media` para telas menores; carrosséis e abas usam rolagem horizontal própria.
