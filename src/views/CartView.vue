<script lang="ts">
import { useCartStore } from '@/stores/CartDetailsStore';
import CartBox from '../components/CartBox.vue'

export default {
  computed:{
    details() {
        return useCartStore().details
    }
  },
  components:{ CartBox }

} 
</script>

<template>
    <CartBox :details="details"/>
</template>











