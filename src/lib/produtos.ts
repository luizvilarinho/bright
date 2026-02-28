import { Product } from '@/types'

export const produtos: Product[] = [
  {
    id: '1',
    slug: 'serenidade-lavanda',
    name: 'Serenidade Lavanda',
    shortDescription: 'Para o fim do dia, quando o corpo pede silêncio.',
    description:
      'Lavanda e eucalipto se encontram nesta vela de cera de soja pura. O aroma delicado preenche o espaço com leveza, convidando o corpo e a mente a desacelerar. Ideal para o ritual do entardecer — um banho quente, uma leitura, um momento só seu. Queima limpa, sem fuligem, com cera 100% vegetal e pavios de algodão.',
    price: 89.9,
    images: [
      'https://picsum.photos/seed/lavanda1/600/800',
      'https://picsum.photos/seed/lavanda2/600/800',
    ],
    category: 'relaxamento',
    aroma: 'Lavanda & Eucalipto',
    burnTime: '40–50 horas',
    size: '200g',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    slug: 'presenca-santal',
    name: 'Presença Santal',
    shortDescription: 'Madeira quente e resina que convidam à meditação.',
    description:
      'Sândalo e vetiver criam uma base profunda e terrosa, envolvida por notas suaves de baunilha. Uma vela para os momentos em que você escolhe estar presente — durante a meditação, a prática de yoga, ou simplesmente sentado em silêncio. O aroma amadeirado ancora e acalma.',
    price: 97.9,
    images: [
      'https://picsum.photos/seed/santal1/600/800',
      'https://picsum.photos/seed/santal2/600/800',
    ],
    category: 'meditacao',
    aroma: 'Sândalo & Vetiver',
    burnTime: '45–55 horas',
    size: '220g',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    slug: 'lar-alecrim',
    name: 'Lar Alecrim',
    shortDescription: 'Frescor herbal que transforma qualquer ambiente.',
    description:
      'Alecrim fresco com toque cítrico de limão siciliano e hortelã. Esta vela foi criada para os momentos em que você quer sentir que o espaço está vivo — enquanto cozinha, limpa a casa ou recebe amigos. Um aroma limpo e energizante que traz presença ao cotidiano.',
    price: 79.9,
    images: [
      'https://picsum.photos/seed/alecrim1/600/800',
      'https://picsum.photos/seed/alecrim2/600/800',
    ],
    category: 'casa',
    aroma: 'Alecrim & Limão Siciliano',
    burnTime: '35–45 horas',
    size: '180g',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    slug: 'cuidado-rosa-argila',
    name: 'Cuidado Rosa & Argila',
    shortDescription: 'Delicadeza floral para rituais de autocuidado.',
    description:
      'Pétalas de rosa absoluta, argila branca e um toque de patchouli. Uma composição feminina e sofisticada, criada para acompanhar os rituais de cuidado — a máscara facial, o banho de ofurô, a leitura tranquila antes de dormir. Para presentes que chegam com intenção.',
    price: 104.9,
    images: [
      'https://picsum.photos/seed/rosa1/600/800',
      'https://picsum.photos/seed/rosa2/600/800',
    ],
    category: 'presente',
    aroma: 'Rosa & Patchouli',
    burnTime: '45–55 horas',
    size: '220g',
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    slug: 'floresta-cedro',
    name: 'Floresta Cedro',
    shortDescription: 'Como caminhar entre pinheiros depois da chuva.',
    description:
      'Cedro virgínia, pinho e musgo branco compõem este aroma que evoca uma caminhada na floresta úmida. Fresco, profundo e levemente terroso. Para quem busca reconexão com a natureza nos pequenos momentos do dia.',
    price: 87.9,
    images: [
      'https://picsum.photos/seed/cedro1/600/800',
      'https://picsum.photos/seed/cedro2/600/800',
    ],
    category: 'relaxamento',
    aroma: 'Cedro & Pinho',
    burnTime: '40–48 horas',
    size: '200g',
    inStock: true,
  },
  {
    id: '6',
    slug: 'quietude-jasmim',
    name: 'Quietude Jasmim',
    shortDescription: 'Floral etéreo para noites de paz profunda.',
    description:
      'Jasmim sambac, ylang-ylang e base de almíscar branco. Uma vela floral que não é doce demais — ela é sutil, sensual e profunda. Perfeita para o ritual da noite, quando a casa quieta finalmente é só sua.',
    price: 94.9,
    images: [
      'https://picsum.photos/seed/jasmim1/600/800',
      'https://picsum.photos/seed/jasmim2/600/800',
    ],
    category: 'meditacao',
    aroma: 'Jasmim & Almíscar',
    burnTime: '42–52 horas',
    size: '210g',
    inStock: true,
  },
  {
    id: '7',
    slug: 'colheita-baunilha',
    name: 'Colheita Baunilha',
    shortDescription: 'Acolhimento doce para dias que precisam de conforto.',
    description:
      'Baunilha de Madagascar, cardamomo e notas suaves de caramelo. Esta é a vela para os dias em que você precisa de colo — uma tarde de outono, uma tarde chuvosa, uma sexta-feira que finalmente chegou. Aquecedora e reconfortante, como uma xícara de chá nas mãos.',
    price: 82.9,
    images: [
      'https://picsum.photos/seed/baunilha1/600/800',
      'https://picsum.photos/seed/baunilha2/600/800',
    ],
    category: 'casa',
    aroma: 'Baunilha & Cardamomo',
    burnTime: '38–48 horas',
    size: '190g',
    inStock: true,
  },
  {
    id: '8',
    slug: 'intencao-incenso',
    name: 'Intenção Incenso',
    shortDescription: 'Sagrado e contemporâneo — para rituais conscientes.',
    description:
      'Olíbano (incenso), mirra e benjoim. Uma vela com raízes ancestrais em uma embalagem contemporânea. Para abrir o espaço antes de meditações, práticas espirituais ou simplesmente quando você quer marcar a transição entre o agito e a calma. Uma pausa que é também um ritual.',
    price: 99.9,
    images: [
      'https://picsum.photos/seed/incenso1/600/800',
      'https://picsum.photos/seed/incenso2/600/800',
    ],
    category: 'meditacao',
    aroma: 'Olíbano & Mirra',
    burnTime: '44–54 horas',
    size: '215g',
    inStock: true,
  },
]

export function getProdutoBySlug(slug: string): Product | undefined {
  return produtos.find((p) => p.slug === slug)
}

export function getProdutosFeatured(): Product[] {
  return produtos.filter((p) => p.featured)
}

export function getProdutosByCategory(category: string): Product[] {
  if (!category || category === 'todos') return produtos
  return produtos.filter((p) => p.category === category)
}
