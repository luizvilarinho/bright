# Skill de Design — Velas Artesanais

Este projeto exige um visual **impecável, sensorial e coeso**. Cada decisão estética deve transmitir calma, artesanalidade, natureza e bem-estar. Leia este documento **antes de escrever qualquer linha de código visual**.

---

## 🎨 Identidade Visual (imutável)

### Paleta de Cores
```css
:root {
  --color-cream:   #F5F0E8;   /* fundo principal */
  --color-amber:   #C8974E;   /* destaque quente, CTAs */
  --color-sage:    #7A8C6E;   /* verde-sálvia, detalhes naturais */
  --color-cocoa:   #3D2B1F;   /* texto principal */
  --color-sand:    #E8D9C0;   /* fundo secundário, cards */
  --color-mist:    #D4CFC7;   /* bordas, divisores */
  --color-smoke:   #8C8075;   /* texto secundário */
  --color-glow:    #F0C87A;   /* hover states, brilho */
  --color-moss:    #4A5C3E;   /* sage escuro, accents */
  --color-linen:   #FAF6F0;   /* branco quente alternativo */
}
```

### Tipografia
```
Display / Títulos: "Cormorant Garamond" (serif elegante)
  - Weights: 300, 400, 600
  - Uso: H1, H2, taglines, nomes de produto, preços

Corpo / UI: "Jost" (sans-serif clean e levemente orgânica)
  - Weights: 300, 400, 500
  - Uso: parágrafos, botões, labels, navegação

Google Fonts import:
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
```

### Escalas Tipográficas
```css
--text-hero:    clamp(3rem, 8vw, 6rem);
--text-section: clamp(2rem, 4vw, 3.5rem);
--text-product: clamp(1.25rem, 2vw, 1.5rem);
--text-body:    1rem;
--text-small:   0.875rem;
```

---

## 🕯️ Direção Estética

**Conceito:** *"Luxury do cotidiano"* — refinamento sem ostentação, orgânico sem ser rústico.

**Referências:** Aesop, Maison Margiela Replica, Kinfolk magazine, marcas de wellness japonesas.

**FAZER:**
- Muito espaço negativo — deixar o produto respirar
- Layouts assimétricos sutis (texto à esquerda, imagem sangrada à direita)
- Micro-animações suaves: fade, slide suave, scale lento no hover
- Bordas finas ou sem bordas — usar sombra e espaço como separadores
- Botões com traço fino, letras espalhadas (`letter-spacing`)
- Grain texture overlay sutil no background

**NUNCA fazer:**
- Gradientes roxos/azuis
- `border-radius > 8px` em cards de produto
- Ícones coloridos e chamativos
- Sombras azuladas (sempre tom sépia/âmbar)
- Fontes genéricas (Inter, Roboto, Arial)
- Layouts perfeitamente simétricos
- Animações rápidas ou elásticas (`bounce`, `spring`)

---

## 📐 Espaçamento

```
Padding de seção:     py-24 md:py-32 lg:py-40
Padding de container: px-6 md:px-12 lg:px-20
Gap entre cards:      gap-6 md:gap-8
Padding interno card: p-6 md:p-8
```

---

## 🧩 Guia por Componente

### Header / NavBar
- Fundo transparente → `--color-cream` com `backdrop-blur` no scroll
- Logo: Cormorant Garamond, `tracking-widest`, maiúsculas
- Links: underline animado via `::after` scaleX no hover
- Ícone de carrinho minimalista com contador em âmbar
- Mobile: overlay fullscreen com fade

### Hero Section
- `min-h-screen`, imagem atmosférica de vela acesa com overlay escuro-âmbar
- Headline: Cormorant Garamond Light, tamanho hero, cor cream
- Subheadline: Jost 300, cream/70%
- CTA: botão outline cream → filled no hover
- Entrada: `opacity` + `translateY` staggerado (0.3s delay entre elementos)
- Grain texture: `opacity-20` com `mix-blend-multiply`

### ProductCard
```
- Sem borda; sombra sépia no hover
- Imagem: aspect-ratio 3/4, scale(1.03) suave no hover (0.6s ease)
- Badge: texto maiúsculo, tracking-wide, cor sage
- Nome: Cormorant Garamond, cocoa
- Descrição: Jost 300, smoke, line-clamp-2
- Preço: Cormorant Garamond italic, amber
- Botão: outline minimalista
```

### ProductGrid
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Título de seção centralizado com linha decorativa fina (40px, âmbar)

### Botões
```css
/* Primário */
background: var(--color-amber);
color: var(--color-linen);
font-family: 'Jost'; font-weight: 500;
letter-spacing: 0.1em; text-transform: uppercase;
font-size: 0.8rem; padding: 0.875rem 2rem;
border-radius: 2px;

/* Outline */
border: 1px solid currentColor; background: transparent;
```

### CartSidebar
- Slide da direita (`translateX`), overlay com `backdrop-blur-sm`
- Fundo cream, borda esquerda fina em sand
- Footer fixo com total e CTA

### Footer
- Fundo cocoa escuro, texto cream/60%
- Links com hover transition para amber
- Tagline em Cormorant Garamond italic

---

## ✨ Animações

```css
--transition-slow:   0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
--transition-medium: 0.3s ease;
--transition-fast:   0.15s ease;
```

**Entrada de seções (Intersection Observer):**
```js
// inicial: opacity 0, translateY 24px
// ao entrar: opacity 1, translateY 0
// transition: 0.7s ease
// stagger: 0.1s de delay entre filhos
```

**Hover em imagens:**
```css
transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
hover: scale(1.04);  /* nunca > 1.06 */
```

---

## 🌿 Texturas e Detalhes

```css
/* Sombras */
--shadow-card:    0 4px 24px rgba(61, 43, 31, 0.08);
--shadow-hover:   0 8px 40px rgba(61, 43, 31, 0.15);
--shadow-sidebar: -4px 0 40px rgba(61, 43, 31, 0.20);

/* Linha decorativa */
width: 40px; height: 1px;
background: var(--color-amber);
margin: 1.5rem auto;
```

---

## 📱 Responsividade

- Mobile-first em tudo
- Hero mobile: fonte menor, `object-position: center 30%`
- Menu mobile: fullscreen overlay
- Testar em 375px e 768px antes de finalizar

---

## ✅ Checklist antes de commitar

- [ ] Fontes: Cormorant Garamond + Jost (não Inter, não Roboto)
- [ ] Cores dentro da paleta — nenhum azul, roxo ou cinza frio
- [ ] Espaçamento generoso
- [ ] Hover states em todos os elementos interativos
- [ ] Mobile ok (375px e 768px)
- [ ] Animações suaves (sem bounce, sem spring)
- [ ] `next/image` com `alt` descritivo
- [ ] Contraste mínimo 4.5:1, `focus-visible` visível
- [ ] `border-radius` máximo 8px em cards
- [ ] Sombras em tom sépia/âmbar

---

## 📚 Referências adicionais

- `tokens.md` — globals.css e tailwind.config.ts completos para copiar
- `copywriting.md` — tom de voz, headlines, CTAs e descrições de produto
