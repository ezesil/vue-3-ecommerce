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
  state: () => ({ products: productss as Product[] }),

  actions: {
    getProducts(){
      if(this.products == undefined || this.products.length == 0)
          this.products = this.products.concat(productss)      
      console.log(this.products)
      return this.products;
    }
  },
})