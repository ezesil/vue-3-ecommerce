<script lang="ts">
import { useCartStore } from "@/stores/CartDetailsStore";
import { useProductsStore } from "@/stores/ProductsStore";
import ProductCard from "./ProductCard.vue";
import { mapActions, mapState } from "pinia";

export default {
    methods:{
        ...mapActions(useCartStore, ['addProduct']),
    },
    computed:{
        ...mapState(useProductsStore, ['products', 'loading'])
    },
    components: { ProductCard }   
}   
</script>



<template>
    <div class="d-flex justify-center align-center h-100" v-if="loading == true">      
        <v-progress-circular indeterminate :size="90" />
    </div>

    <v-row v-else>
        <v-col v-for="p in products" :key="p.id" cols="12" sm="6" md="4" lg="3">
            <ProductCard     
            :product="p" 
            @productAddedToCart="addProduct(p)"/>
        </v-col>
    </v-row>
</template>





