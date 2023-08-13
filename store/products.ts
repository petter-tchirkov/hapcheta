import { defineStore } from 'pinia'

type Product = {
  id: number
  name: string
  price: number
  quantity: number
  isVisible: boolean
}

export const useProductsStore = defineStore('products', () => {
  const products: Ref<Product[]> = ref([
    { id: 1, name: 'Nemesil', price: 42, quantity: 13, isVisible: false },
    { id: 1, name: 'Aspirine', price: 42, quantity: 13, isVisible: true },
    { id: 1, name: 'Sorbex', price: 42, quantity: 13, isVisible: false },
    { id: 1, name: 'Magnium + B6', price: 42, quantity: 13, isVisible: true },
  ])

  return { products }
})
