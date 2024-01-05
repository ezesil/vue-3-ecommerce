import { defineStore } from 'pinia'
import { type CartDetails } from '../models/CartDetails'
import { type Product } from '../models/Product'

export const useCartStore = defineStore('cart', {
    state: () => ({ details: [] as CartDetails[] }),
    getters: {
      cartItemsCount: (state) => {
        let count = 0;
        state.details.forEach(d => count += d.count);
        return count;
      },
      totalAmount: (state) => {
        let total = 0;
        
        state.details.forEach(d => {
          total += d.product.price * d.count;
        });

        return total;
      }
    },
    actions: {
      addProduct(product: Product){
        const prod = this.details?.find(d => d.product.id == product.id)
        if(prod != undefined){
            prod.count = prod.count + 1
        }
        else{
            if(product != undefined){
                const detail = { product, count: 1}
                this.details.push(detail)
            }      
        }
      },
      deleteProduct(id: number){
        const index = this.details.findIndex(d => d.product.id === id);
        this.details.splice(index, 1);
      },
      incrementProductCount(id: number){
        const prod = this.details?.find(d => d.product.id == id)
        if(prod)
          prod.count += 1;
      },
      decrementProductCount(id: number){
        const prod = this.details?.find(d => d.product.id == id)
        if(prod && prod.count > 1)
          prod.count -= 1;
      }
    }
  }
)