import { defineStore } from 'pinia'
import { type CartDetails, type Product } from '../models/Product.ts'

export const useCartStore = defineStore('cart', {
    state: () => ({ details: <Array<CartDetails>>[] }),
    getters: {
      cartItemsCount: (state) => {
        let count = 0;
        state.details.forEach(d => count += d.count);
        return count;
      }
    },
    actions: {
      addProduct(product: Product){
        const prod = this.details?.find(prod => prod.id == product.id)
        if(prod != undefined){
            prod.count = prod.count + 1
        }
        else{
            if(product != undefined){
                const detail = {id: product?.id, name:product?.name, count: 1}
                this.details.push(detail)
            }      
        }
    },
}})