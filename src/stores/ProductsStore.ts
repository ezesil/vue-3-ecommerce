import { defineStore } from 'pinia'
import { type Product } from '../models/Product'

const productss = [
  { id: 1, name: "Silla", price: 56, categoryId: 2, image: "/products/silla1.webp"}, 
  { id: 2, name: "Monitor", price: 450, categoryId: 1, image:"/products/monitor1.webp"},
  { id: 3, name: "Microfono", price: 20, categoryId: 1, image:"/products/microfono1.webp"},
  { id: 4, name: "Silla", price: 568, categoryId: 2, image:"/products/silla2.webp"}, 
  { id: 5, name: "Monitor", price: 600, categoryId: 1, image:"/products/monitor2.webp"},
  { id: 6, name: "Microfono", price: 40, categoryId: 1, image:"/products/microfono2.webp"},
  { id: 6, name: "Parlantes", price: 40, categoryId: 1, image:"/products/parlantes1.webp"},
  { id: 6, name: "Audifonos", price: 40, categoryId: 2, image:"/products/audifonos1.webp"},
  { id: 6, name: "Mouse Gamer", price: 40, categoryId: 2, image:"/products/mousegamer1.webp"}
] as Product[]

export const useProductsStore = defineStore('products', {
  state: () => ({
     _products: productss as Product[],
     categoryId: null as number | null
    }),

  getters:{
    products(state) : Product[]{ 
      if(!state.categoryId)
        return state._products;

      return state._products.filter(p => p.categoryId == this.categoryId);
    }
  },

  actions: {
    selectCategory(categoryId: number){
      this.categoryId = categoryId
    }  
  },
})