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
        ...mapState(useProductsStore, ['products'])
    },
    components: { ProductCard }   
}   
</script>



<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="3">
            <ProductCard     
            :product="p" 
            @productAddedToCart="addProduct(p)"/>
        </v-col>
    </v-row>
</template>





