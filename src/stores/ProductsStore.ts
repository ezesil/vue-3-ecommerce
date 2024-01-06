import { defineStore } from 'pinia'
import { type Product } from '../models/Product';
import { ProductPriceSorter, ProductNameSorter, type SorterDict } from '@/models/OrderTypes';
import { SorterConfigurator } from '../models/OrderTypes';
import { GlobalVars } from '@/globals/globals';

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
      let workedProducts = null;
      const orderType = String(state.order);

      if(state.categoryId) { 
        if(GlobalVars.environmentType === "DEVELOPMENT")
        {
          console.log("Filtro por categoria: " + state.categoryId)
          console.log(workedProducts)
        }
        workedProducts = this._products.filter(p => p.categoryId === this.categoryId); 
      }   
      else { 
        workedProducts = this._products.slice(); 

        if(GlobalVars.environmentType === "DEVELOPMENT")
        {
          console.log("Sin filtro por categoria: " + state.categoryId)
          console.log(workedProducts)
        }
      }   

      if(this.sorters[orderType]){
        
        if(GlobalVars.environmentType === "DEVELOPMENT")
        {
          console.log("Con ordenamiento: " + orderType)
          console.log(workedProducts)
        }

        return state.sorters[orderType](workedProducts).result as Product[];
      }
      else{

        if(GlobalVars.environmentType === "DEVELOPMENT"){
          console.log("Sin ordenamiento: " + orderType)
          console.log(workedProducts)
          console.log(this._products)
        }

        return workedProducts;
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