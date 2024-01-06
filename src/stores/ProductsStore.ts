import { defineStore } from 'pinia'
import { type Product } from '../models/Product';
import { ProductPriceSorter, ProductNameSorter, type SorterDict } from '@/models/OrderTypes';
import { SorterConfigurator } from '../models/OrderTypes';

const productss = [
  { id: 1, name: "Silla", price: 56, categoryId: 2, image: "/products/silla1.webp"}, 
  { id: 2, name: "Monitor", price: 450, categoryId: 1, image:"/products/monitor1.webp"},
  { id: 3, name: "Microfono", price: 20, categoryId: 1, image:"/products/microfono1.webp"},
  { id: 4, name: "Silla", price: 568, categoryId: 2, image:"/products/silla2.webp"}, 
  { id: 5, name: "Monitor", price: 600, categoryId: 1, image:"/products/monitor2.webp"},
  { id: 6, name: "Microfono", price: 40, categoryId: 1, image:"/products/microfono2.webp"},
  { id: 7, name: "Parlantes", price: 40, categoryId: 1, image:"/products/parlantes1.webp"},
  { id: 8, name: "Audifonos", price: 40, categoryId: 2, image:"/products/audifonos1.webp"},
  { id: 9, name: "Mouse Gamer", price: 40, categoryId: 2, image:"/products/mousegamer1.webp"}
] as Product[]

const sorters = SorterConfigurator.createSorterDict([
  new ProductPriceSorter(),
  new ProductNameSorter()
])

export const useProductsStore = defineStore('products', {
  state: () => ({
      _products: productss as Product[],
      categoryId: null as Number | null,
      order: null as String | null,
      sorters: sorters as SorterDict
    }),
  getters:{
    products(state) : Product[]{ 
      let products = null;

      if(state.categoryId) { 
        products = state._products.filter(p => p.categoryId == this.categoryId); 
      }   
      else { 
        products = state._products; 
      }   

      if(state.order === null || state.order === ''){
        return products;
      }
      else{
        products = state.sorters[String(state.order)](products).result as Product[];
        return products;
      }
    }
  },
  actions: {
    selectCategory(categoryId: number){
      this.categoryId = categoryId;
    },
    clearOrder(){
      this.order = null;
    },
    sortBy(orderType: string){  
      if(this.sorters[orderType])    
        this.order = orderType;
    }, 
  },
})