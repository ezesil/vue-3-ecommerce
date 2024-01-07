import { defineStore } from 'pinia'
import { type CartDetails } from '../models/CartDetails'
import { type Product } from '../models/Product'
import { useLocalStorage } from '@vueuse/core'
import { GlobalVars } from '@/globals/globals';

const _details = useLocalStorage<CartDetails[]>('cartDetails', []);

export const useCartStore = defineStore('cart', {
    state: () => ({ 
      details: _details,
     }),
    getters: {
      cartItemsCount: (state) => {
        let count = 0;
        state.details?.forEach(d => count += d.count);
        return count;
      },
      totalAmount: (state) => {
        let total = 0;
        
        state.details?.forEach(d => {
          total += d.product.price * d.count;
        });

        return total;
      },
      whatsAppMessage(state){
        let message = 'Hola, quiero realizar la siguiente compra:\n'
        state.details.forEach(d => {
          message += `Producto: ${d.product.name}\n`;
          message += `Cantidad: ${d.count}\n`;
          message += `Subtotal: ${d.count * d.product.price}\n`;
          message += "-----------------------\n";
        });

        message += `Total a pagar: $${this.totalAmount}\n\n`
        message += "¡Muchas gracias! :)"

        return encodeURI(message)
      },
      whatsAppLink(){
        return 'https://api.whatsapp.com/send/?phone=' + GlobalVars.whatsappNumber + '&text=' + this.whatsAppMessage;
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
      },
      
    }
  }
)