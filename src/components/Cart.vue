<script lang="ts">
import { useCartStore } from '../stores/CartDetailsStore';

export default {
    methods:{
        increment(id: number){
            this.cartStore.increment(id);
        },
        decrement(id: number){
            this.cartStore.decrement(id);
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
            <v-list>
                <v-list-item v-for="product in details" :value="product?.productId">
                    <v-list-item-title>
                        Nombre: {{product?.name}}
                        <v-btn @click="increment(product.id)">+</v-btn>
                        ({{product?.count}})
                        <v-btn v-if="product.count <= 1" @click="decrement(product.id)" color="red">Eliminar</v-btn>
                        <v-btn v-else @click="decrement(product.id)">-</v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>   
</template>



