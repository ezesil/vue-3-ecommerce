<script lang="ts">
import { mapState } from 'pinia';
import { useCartStore } from '../../stores/CartDetailsStore';

export default{
    computed:{
        ...mapState(useCartStore, ['totalAmount', 'whatsAppLink'])
    }
}

</script>

<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            <p>
                Total a pagar: ${{ totalAmount }}
            </p>
        </v-card-subtitle>
        <v-card-text>
            <v-btn :href="whatsAppLink" variant="tonal" color='orange-lighten-2'>
                Realizar pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>