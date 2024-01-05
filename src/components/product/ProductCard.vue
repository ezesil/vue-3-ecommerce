<script lang="ts">
import type { Product } from '@/models/Product';
import type { PropType } from 'vue';

export default {
  props:{
    product: {
      type: Object as PropType<Product>,
      required: true
    },
  },
  computed:{
    productImageUrl(){
      return this.product.image ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg";
    }
  },
  emits:["productAddedToCart"]
}

</script>
<template>    
      <v-card>

        <v-img
          :src="productImageUrl"
          height="500px"
          cover>
        </v-img>

        <v-card-title>
          {{ product.name }}
        </v-card-title> 

        <v-card-text>
          <p class="mb-2">Descripcion del producto</p>
          <v-chip>
            ${{ product.price }}
          </v-chip>
        </v-card-text>


        <v-card-actions>
          <v-btn @click="$emit('productAddedToCart')" color='orange-lighten-2'>
            Agregar al carrito
          </v-btn>
        </v-card-actions>        
      </v-card>
      
</template> 


