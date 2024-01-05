<script lang="ts">
import { useCartStore } from '@/stores/CartDetailsStore'
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink,
    },
    computed: {
        itemsCount() {
            const cartStore = useCartStore()
            return cartStore.cartItemsCount
        },
    },
}
</script>

<template>
    <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
            <v-avatar 
            class="me-10 ms-4" 
            color="grey-darken-1" 
            size="32">

                <v-img aspect-ratio="stretched" src="/logo.jpg"></v-img>

            </v-avatar>

            <RouterLink v-slot="{ navigate }" to="/">
                <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home' || $route.name === 'categories'" color="white" @click="navigate">
                    Home
                </v-btn>
            </RouterLink>

            <RouterLink v-slot="{ navigate }" to="/cart">
                <v-btn :active="$route.name === 'cart'" color="white" @click="navigate">
                    <template #prepend>
                        <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
                            <v-icon icon="mdi-cart" color="white"></v-icon>
                        </v-badge>
                    </template>
                    Cart
                </v-btn>
            </RouterLink>

            <RouterLink v-slot="{ navigate }" to="/about">
                <v-btn prepend-icon="mdi-information" :active="$route.name === 'about'" color="white" @click="navigate">
                    About
                </v-btn>
            </RouterLink>



                <v-spacer></v-spacer>

                <v-responsive max-width="260">
                    <v-text-field
                        density="compact"
                        hide-details
                        variant="solo"
                    ></v-text-field>
                </v-responsive>
        </v-container>
    </v-app-bar>
</template>
