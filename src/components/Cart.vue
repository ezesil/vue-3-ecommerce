<script lang="ts">
import { useCartStore } from '../stores/CartDetailsStore';
import { RouterLink } from 'vue-router';

export default {
    methods:{
        increment(id: number){
            this.cartStore.increment(id);
        },
        decrement(id: number){
            this.cartStore.decrement(id);
        },
        deleteProduct(id: number){
            this.cartStore.deleteProduct(id);
        }
    },
    computed:{
        cartStore(){
            return useCartStore();
        },
        details() {
            return this.cartStore.details
        }
  }
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
            <p>Carrito de compras:</p>
        </v-card-title>
        <v-card-text>
            <v-list v-if="details.length > 0">             
                <v-list-item v-for="product in details" :value="product?.productId">
                    <v-list-item-title>
                        Nombre: {{product?.name}}
                        <v-btn @click="increment(product.id)">+</v-btn>
                        ({{product?.count}})
                        <v-btn v-if="product.count <= 1" @click="deleteProduct(product.id)" color="red">Eliminar</v-btn>
                        <v-btn v-else @click="decrement(product.id)">-</v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <div v-else>
                Todavía no tenés productos agregados a tu carrito de compras.
                <p>Podés agregar productos en la <RouterLink to="/">pagina principal</RouterLink>.</p>
            </div>
        </v-card-text>
    </v-card>   
</template>



