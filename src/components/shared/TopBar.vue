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
                <v-btn :active="$route.name === 'home' || $route.name === 'categories'" color="white" @click="navigate">
                    <v-icon icon="mdi-home-variant" color="white"></v-icon>
                    <span class="d-none d-sm-flex">Home</span>
                </v-btn>
            </RouterLink>

            <RouterLink v-slot="{ navigate }" to="/cart">
                <v-btn :active="$route.name === 'cart'" color="white" @click="navigate">
                    <v-icon icon="mdi-cart" color="white"></v-icon>
                    <span class="d-none d-sm-flex m-3">Cart</span>
                    <v-badge class="mb-9" :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
                    </v-badge>
                </v-btn>
                </RouterLink>

            <RouterLink v-slot="{ navigate }" to="/about">
                <v-btn :active="$route.name === 'about'" color="white" @click="navigate">
                    <v-icon icon="mdi-information" color="white"></v-icon>
                    <span class="d-none d-sm-flex">About</span>
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
