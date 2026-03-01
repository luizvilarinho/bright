import { MetadataRoute } from 'next'
import { produtos } from '@/lib/produtos'

const baseUrl = 'https://bright-velas.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = produtos.map((product) => ({
    url: `${baseUrl}/produtos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...products,
  ]
}
