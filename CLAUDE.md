# Projeto: Velas Artesanais — Next.js

## Visão Geral
Site de e-commerce de velas artesanais com foco em bem-estar, meditação, natureza e cuidados com a saúde mental. A comunicação é sensorial, acolhedora e autêntica — voltada para quem valoriza produtos feitos com intenção.

## Stack Principal
| Camada        | Tecnologia                  | Versão   |
|---------------|-----------------------------|----------|
| Framework     | Next.js (App Router)        | ^15.2    |
| Linguagem     | TypeScript                  | ^5.7     |
| Runtime UI    | React                       | ^19.0    |
| Estilização   | Tailwind CSS v4             | ^4.0     |


## ⚠️ Regra obrigatória para design

Antes de criar ou modificar QUALQUER componente visual, página, layout ou estilo,
leia obrigatoriamente os seguintes arquivos nesta ordem:

1. `.claude/design/SKILL.md` — direção estética, paleta, tipografia, guia por componente
2. `.claude/design/tokens.md` — globals.css e tailwind.config.ts prontos para uso
3. `.claude/design/copywriting.md` — tom de voz, exemplos de headline, CTAs e descrições

Isso se aplica a: Hero, Header, Footer, ProductCard, ProductGrid, CartSidebar,
Checkout, páginas, animações, cores, fontes — qualquer coisa visual.


# 🕯️ Velas Artesanais — Projeto Next.js

## Identidade Visual

- **Paleta:** tons terrosos e quentes — bege, âmbar, verde-sálvia, branco-creme, marrom-cacau
- **Tipografia:** display serifada elegante (ex: Playfair Display) + corpo sans-serif suave (ex: DM Sans)
- **Tom de voz:** poético, calmo, acolhedor — sem exageros comerciais
- **Imagens:** fotografia de produto em luz natural, texturas orgânicas, elementos da natureza
- **Emoção transmitida:** paz, presença, cuidado, artesanalidade


## Páginas e Rotas

| Rota | Descrição |
|---|---|
| `/` | Landing page principal |
| `/produtos` | Catálogo de velas |
| `/produtos/[slug]` | Detalhe do produto |
| `/carrinho` | Carrinho de compras |
| `/checkout` | Formulário de pagamento (Stripe — futuro) |
| `/sobre` | História da marca |


## Landing Page (`/`)

Seções em ordem:

1. **Hero** — Headline impactante, subheadline sensorial, CTA "Explorar Coleção". Fundo com imagem/vídeo atmosférico de vela acesa.
2. **Propósito** — Bloco curto sobre a missão da marca (artesanal, sustentável, intenção).
3. **Destaques de Produtos** — Grid com 3–4 produtos em destaque (card com imagem, nome, preço, botão rápido de adicionar ao carrinho).
4. **Como é Feito** — Seção sobre o processo artesanal com ícones ou imagens.
5. **Experiência / Bem-Estar** — Bloco sobre meditação, aromaterapia, presença.
6. **Depoimentos** — 2–3 reviews de clientes.
7. **Newsletter** — Campo de e-mail com CTA suave.
8. **Footer** — Links, redes sociais, política de privacidade.


## Catálogo de Produtos (`/produtos`)

- Grid responsivo (2 col mobile / 3-4 col desktop)
- espaçamentos baseados em multiplos de 8px
- Filtros: categoria (relaxamento, meditação, casa, presente), aroma, tamanho
- Card de produto:
  - Imagem principal (hover mostra segunda imagem)
  - Nome do produto
  - Descrição curta (1–2 linhas)
  - Preço
  - Botão "Adicionar ao Carrinho"

## Detalhe do Produto (`/produtos/[slug]`)

- Galeria de imagens
- Nome, descrição completa, ingredientes/materiais
- Informações: tempo de queima, tamanho, aroma
- Seletor de quantidade
- Botão "Adicionar ao Carrinho"
- Seção "Você também pode gostar"


## Carrinho de Compras

- Sidebar ou página dedicada (`/carrinho`)
- Lista de itens com imagem, nome, quantidade, preço
- Ajuste de quantidade e remoção de itens
- Resumo: subtotal, frete (a calcular), total
- CTA "Finalizar Compra" → redireciona para `/checkout`

**Gerenciamento de estado:** Zustand com persistência em `localStorage`


## Checkout (`/checkout`)

> ⚠️ Integração com Stripe a ser implementada em fase posterior.

Estrutura da página (preparar componentes, sem lógica real por enquanto):

- Resumo do pedido (readonly)
- Formulário: nome, e-mail, endereço de entrega
- Seção de pagamento: placeholder para Stripe Elements
- Botão "Confirmar Pedido" (desabilitado até integração)

## Estrutura de Pastas (App Router)

```
/app
  /page.tsx                  ← Landing page
  /produtos
    /page.tsx                ← Catálogo
    /[slug]/page.tsx         ← Detalhe
  /carrinho/page.tsx
  /checkout/page.tsx
  /sobre/page.tsx
  layout.tsx
  globals.css

/components
  /ui                        ← Componentes base (Button, Badge, Input...)
  /layout                    ← Header, Footer, NavBar
  /produto                   ← ProductCard, ProductGallery, ProductGrid
  /carrinho                  ← CartSidebar, CartItem, CartSummary
  /landing                   ← Hero, Depoimentos, Newsletter, PropositoSection

/store
  cartStore.ts               ← Zustand

/lib
  produtos.ts                ← Mock data ou fetch da API/CMS

/types
  index.ts                   ← Tipos: Product, CartItem, etc.

/public
  /images
```


## Tipos Principais

```typescript
type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  images: string[]
  category: 'relaxamento' | 'meditacao' | 'casa' | 'presente'
  aroma: string
  burnTime: string  // ex: "40–50 horas"
  size: string
  inStock: boolean
}

type CartItem = {
  product: Product
  quantity: number
}
```

## Dados de Produto (Mock inicial)

Criar em `/lib/produtos.ts` um array estático com 6–8 produtos para desenvolvimento. Cada produto deve ter slug único, 2–3 imagens placeholder e descrições que evoquem bem-estar e intenção.-

## Componentes Prioritários (ordem de desenvolvimento)

1. `Header` com logo, nav e ícone do carrinho com contador
2. `ProductCard` — reutilizável em toda a app
3. `CartStore` (Zustand)
4. `Hero` da landing page
5. `ProductGrid` e página de catálogo
6. `CartSidebar` ou página de carrinho
7. Restante da landing page (Propósito, Depoimentos, Newsletter)
8. Página de detalhe do produto
9. Página de checkout (estrutura, sem integração)

## Notas para o Agente

- Usar **App Router** do Next.js 14+
- **Server Components** por padrão; usar `'use client'` apenas quando necessário (interatividade, hooks)
- Imagens via `next/image` com `alt` descritivo
- SEO: `metadata` por página com título e descrição relevantes
- Acessibilidade: foco visível, `aria-label` em botões de ação, contraste adequado
- Responsividade mobile-first em todos os componentes
- Nenhuma lógica de pagamento real por enquanto — apenas estrutura de UI para o checkout