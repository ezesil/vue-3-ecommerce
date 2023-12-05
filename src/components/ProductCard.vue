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
      <v-card>

        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover>
        </v-img>

        <v-card-title>
          {{ props.product.name }}
        </v-card-title>

        <v-card-text>
          <p class="mb-2">Descripcion del producto</p>
          <v-chip>
            ${{ props.product.price }}
          </v-chip>
        </v-card-text>


        <v-card-actions>
          <v-btn @click="$emit('productAddedToCart')" color='orange-lighten-2'>
            Agregar al carrito
          </v-btn>
        </v-card-actions>

        <!-- <button @click="$emit('productAddedToCart')">
          Agregar al carrito
        </button> -->
        
      </v-card>
      
</template> 


