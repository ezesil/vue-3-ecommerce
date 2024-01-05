<script setup lang="ts">
  import ProductList from '../components/product/ProductList.vue'
  import CategoryList from '../components/category/CategoryList.vue'
</script>

<template>
    <v-row>
      <v-col cols="2">
        <CategoryList/>
      </v-col>

      <v-col cols="10">
        <ProductList/>
      </v-col>
    </v-row>
</template>
