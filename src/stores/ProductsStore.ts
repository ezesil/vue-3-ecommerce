import { defineStore } from 'pinia'
import { type Product } from '../models/Product'

const productss = [
  { id: 1, name: "Silla", price: 56, image: "https://http2.mlstatic.com/D_NQ_NP_775110-MLA42474847933_072020-O.webp"}, 
  { id: 2, name: "Monitor", price: 450, image:"https://http2.mlstatic.com/D_NQ_NP_941753-MLA43316856634_082020-O.webp"},
  { id: 3, name: "Microfono", price: 20, image:"https://http2.mlstatic.com/D_NQ_NP_920384-MLA44483791841_012021-O.webp"},
  { id: 4, name: "Silla", price: 568, image:"https://http2.mlstatic.com/D_NQ_NP_639542-MLA46196372637_052021-O.webp"}, 
  { id: 5, name: "Monitor", price: 600, image:"https://http2.mlstatic.com/D_NQ_NP_955209-MLU72526441068_102023-O.webp"},
  { id: 6, name: "Microfono", price: 40, image:"https://http2.mlstatic.com/D_NQ_NP_781625-MLA42363191829_062020-O.webp"}
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