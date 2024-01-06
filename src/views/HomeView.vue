<script lang="ts">
  import ProductList from '../components/product/ProductList.vue'
  import LeftMenu from '../components/left/LeftMenu.vue'
  import { useProductsStore } from '../stores/ProductsStore';

  function updateCategoryFromRouteParams(categoryId: string | string[]){
    const productsStore = useProductsStore()
    const catId = Number(categoryId)
    productsStore.selectCategory(catId)
  }

  export default {
    components:{ ProductList, LeftMenu },

    beforeRouteEnter(to){
      updateCategoryFromRouteParams(to.params.categoryId)
    },
    beforeRouteUpdate(to){
      updateCategoryFromRouteParams(to.params.categoryId)
    }
  }

</script>

<template>
    <v-row>
      <v-col cols="2">
        <LeftMenu/>
      </v-col>

      <v-col cols="10">
        <ProductList/>
      </v-col>
    </v-row>
</template>
