import { defineStore } from 'pinia'
import { type Product } from '../models/Product'

const productss:Array<Product> = [
  { id: 1, name: "Silla", price: 56}, 
  { id: 2, name: "Monitor", price: 450},
  { id: 3, name: "Microfono", price: 20},
  { id: 4, name: "Silla", price: 568}, 
  { id: 5, name: "Monitor", price: 600},
  { id: 6, name: "Microfono", price: 40}
]

export const useProductsStore = defineStore('products', {
  state: () => ({ products: <Array<Product>>[] }),

  actions: {
    getProducts(){
      if(this.products == undefined || this.products.length == 0)
          this.products = this.products.concat(productss)      
      return this.products;
    }
  },
})