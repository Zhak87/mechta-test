export interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
  rating: number
  ratesCount: number
  discount: number
  material: string
  lenseMaterial: string
  lenseWidth: string
  countryManufacturer: string
  connector: string
  createdAt: string
}

export interface Filters {
  title: string
  order: 'asc' | 'desc'
  orderBy: string
  page: number
  limit: number
}
