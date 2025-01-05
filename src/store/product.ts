import { defineStore } from 'pinia'
import axios from 'axios'
import { Filters, Product } from '@/models/models'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    filters: {
      title: '',
      order: 'asc',
      orderBy: '',
      page: 1,
      limit: 10,
    } as Filters,
    total: 0,
  }),
  actions: {
    async fetchProducts(append: boolean = false): Promise<void> {
      const params: Filters = { ...this.filters }
      const { data } = await axios.get<Product[]>(
        'https://665801795c36170526468b7c.mockapi.io/api/v1/products',
        { params },
      )

      if (append) {
        this.products.push(...data)
      } else {
        this.products = data
      }
    },

    async fetchProductById(id: string): Promise<Product> {
      const { data } = await axios.get<Product>(
        `https://665801795c36170526468b7c.mockapi.io/api/v1/products/${id}`,
      )
      return data
    },

    setSortOption(option: string): void {
      switch (option) {
        case 'popularity':
          this.filters.sort = 'popularity|desc'
          break
        case 'priceLow':
          this.filters.sort = 'price|asc'
          break
        case 'priceHigh':
          this.filters.sort = 'price|desc'
          break
        case 'newest':
          this.filters.sort = 'createdAt|desc'
          break
        case 'alphabetical':
          this.filters.sort = 'title|asc'
          break
        default:
          this.filters.sort = ''
      }

      this.filters.page = 1
      this.fetchProducts(false)
    },
  },
})
