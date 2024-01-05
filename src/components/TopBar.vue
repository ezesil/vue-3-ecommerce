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
        <v-container ma-0 pa-0 fill-height class="mx-auto d-flex align-center justify-center">
            <v-avatar class="me-4" color="grey-darken-1" size="32" />

            <RouterLink v-slot="{ navigate }" to="/">
                <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home'" color="white" @click="navigate"
                >Home</v-btn
                >
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
