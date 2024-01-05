<script lang="ts">
import { useCartStore } from '../stores/CartDetailsStore';
import { RouterLink } from 'vue-router';

export default {
    methods: {
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
    },
    components:{
        RouterLink
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
                <v-list-item v-for="product in details" :key="product.id" :value="product?.id">
                    <v-list-item-title>
                        {{product?.name}}

                        <v-btn 
                            class="ml-2"
                            icon="mdi-plus"
                            size="x-small" 
                            @click="increment(product.id)"/>

                        ({{product?.count}})
                        
                        <v-btn 
                            icon="mdi-minus"
                            size="x-small" 
                            @click="decrement(product.id)"/>

                        <v-btn 
                            icon="mdi-delete"
                            size="x-small" 
                            @click="deleteProduct(product.id)"/>


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



