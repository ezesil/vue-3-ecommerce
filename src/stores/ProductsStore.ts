import { defineStore } from 'pinia'
import { type Product } from '../models/Product';
import { ProductPriceSorter, ProductNameSorter, type SorterDict } from '@/models/OrderTypes';
import { SorterConfigurator } from '../models/OrderTypes';
import { GlobalVars } from '@/globals/globals';

const sorters = SorterConfigurator.createSorterDict([
  new ProductPriceSorter(),
  new ProductNameSorter()
])

export const useProductsStore = defineStore('products', {
  state: () => ({
      _products: [] as Product[],
      loading: true as Boolean | undefined,
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
    fetchProducts(){
      this.loading = true;

      fetch('/data/products.json')
      .then(response => response.json())
      .then((data) => { 
        this._products = data as Product[];
        this.loading = false;
       })
    },
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