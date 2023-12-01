<script setup lang="ts">
    import ProductCard from "./ProductCard.vue"
    import Cart from "./Cart.vue"
    import type {CartDetails, Product} from "./Product"
    import  { ref } from "vue";

    const products:Product[] = [
        { id: 1, name: "Silla", price: 56}, 
        { id: 2, name: "Monitor", price: 450},
        { id: 3, name: "Microfono", price: 20}
    ]

    let details = ref<CartDetails[]>([]).value



    function addProduct(id: number){
        console.log(`Agregando producto con ID ${id}`)
        let prod: CartDetails | undefined = details?.find(prod => prod.id == id)
        if(prod != undefined){
            prod.count = prod.count + 1
        }
        else{
            let product: Product | undefined = products.find(prod => prod.id == id) 
            if(product != undefined){
                console.log(`Acá`)
                let detail: CartDetails = {id: product?.id, name:product?.name, count: 1}
                details?.push(detail)
            }      
        }
    }
</script>



<template>
    <h2>Lista de productos:</h2>
    <ul> 
        <ProductCard 
        v-for="p in products" 
        :product="p" 
        @productAddedToCart="addProduct(p.id)"/>   
    </ul>
    <h2>Carrito de compras:</h2>
    <ul>
        <Cart :details=details></Cart>
    </ul>



</template>





