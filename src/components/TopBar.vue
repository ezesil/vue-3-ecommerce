<script lang="ts">
    import { useCartStore } from "@/stores/CartDetailsStore";
import { RouterLink } from "vue-router"

    export default{
        computed:{
            itemsCount(){
                const cartStore = useCartStore();
                return cartStore.cartItemsCount;
            }
        }       
    }

</script>

<template>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <RouterLink to="/" v-slot="{navigate}">
          <v-btn text="Home" @click="navigate"></v-btn>
        </RouterLink>
        <RouterLink to="/cart" v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2"> 
            <v-btn text="Cart" @click="navigate"></v-btn>
          </v-badge>
        </RouterLink>
        <RouterLink to="/about" v-slot="{navigate}">
          <v-btn text="About" @click="navigate"></v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>