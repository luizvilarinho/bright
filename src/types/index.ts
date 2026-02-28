export type ProductCategory = 'relaxamento' | 'meditacao' | 'casa' | 'presente'

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  images: string[]
  category: ProductCategory
  aroma: string
  burnTime: string
  size: string
  inStock: boolean
  featured?: boolean
}

export type CartItem = {
  product: Product
  quantity: number
}
