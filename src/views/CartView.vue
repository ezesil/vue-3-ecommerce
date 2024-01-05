<script lang="ts">
import CartBox from '../components/cart/CartBox.vue'
import SummaryCard from '../components/cart/SummaryCard.vue'

export default {
  components:{ CartBox, SummaryCard }
} 
</script>

<template>
  <v-row>
      <v-col cols="8">
        <CartBox />
      </v-col>
      <v-col cols="4">
        <SummaryCard />
      </v-col>

  </v-row>


</template>











