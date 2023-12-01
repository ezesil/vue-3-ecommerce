<script setup lang="ts">
import type { Product } from './Product'
import type { PropType } from 'vue'


const props = defineProps({ 
  product: {
    type: Object as PropType<Product>,
    required: true
  },
})

defineEmits(["productAddedToCart"]);

</script>

 
<template>    
      <p>Nombre: {{ props.product.name }}</p> 
      <p>Precio: {{ props.product.price}}</p>
      <button @click="$emit('productAddedToCart')">
        Agregar al carrito
      </button>
    <hr/> 
</template> 


