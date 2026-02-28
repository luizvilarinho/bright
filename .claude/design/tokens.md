# Design Tokens — globals.css e tailwind.config.ts

## globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-cream:   #F5F0E8;
  --color-amber:   #C8974E;
  --color-sage:    #7A8C6E;
  --color-cocoa:   #3D2B1F;
  --color-sand:    #E8D9C0;
  --color-mist:    #D4CFC7;
  --color-smoke:   #8C8075;
  --color-glow:    #F0C87A;
  --color-moss:    #4A5C3E;
  --color-linen:   #FAF6F0;

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Jost', system-ui, sans-serif;

  --text-hero:    clamp(3rem, 8vw, 6rem);
  --text-section: clamp(2rem, 4vw, 3.5rem);
  --text-product: clamp(1.25rem, 2vw, 1.5rem);
  --text-body:    1rem;
  --text-small:   0.875rem;

  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-slow:   0.6s var(--ease-smooth);
  --transition-medium: 0.3s ease;
  --transition-fast:   0.15s ease;

  --shadow-card:    0 4px 24px rgba(61, 43, 31, 0.08);
  --shadow-hover:   0 8px 40px rgba(61, 43, 31, 0.15);
  --shadow-sidebar: -4px 0 40px rgba(61, 43, 31, 0.20);
  --shadow-button:  0 2px 12px rgba(200, 151, 78, 0.30);
}

html {
  background-color: var(--color-cream);
  color: var(--color-cocoa);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

/* Animação de entrada */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Linha decorativa */
.divider-amber {
  width: 40px;
  height: 1px;
  background: var(--color-amber);
  margin: 1.5rem auto;
}
```

## tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#F5F0E8',
        amber:  '#C8974E',
        sage:   '#7A8C6E',
        cocoa:  '#3D2B1F',
        sand:   '#E8D9C0',
        mist:   '#D4CFC7',
        smoke:  '#8C8075',
        glow:   '#F0C87A',
        moss:   '#4A5C3E',
        linen:  '#FAF6F0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':    '0 4px 24px rgba(61, 43, 31, 0.08)',
        'hover':   '0 8px 40px rgba(61, 43, 31, 0.15)',
        'sidebar': '-4px 0 40px rgba(61, 43, 31, 0.20)',
        'button':  '0 2px 12px rgba(200, 151, 78, 0.30)',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
      },
      letterSpacing: {
        brand: '0.15em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
```
