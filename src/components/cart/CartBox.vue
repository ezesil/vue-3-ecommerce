<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../../stores/CartDetailsStore';
import CartBoxItem from './CartBoxItem.vue'

export default {
    methods: {
        ...mapActions(useCartStore, ['decrementProductCount','incrementProductCount','deleteProduct'])
    },
    computed:{
        ...mapState(useCartStore, ['details'])
    },
    components:{
        CartBoxItem
    }
}
</script>

<template>
    <v-card>
        <v-card-title>
            <p>Carrito de compras:</p>
        </v-card-title>
        <v-card-text>
            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th class="text-left">
                            Producto
                        </th>
                        <th class="text-center">
                            Cantidad
                        </th>
                        <th class="text-left">
                            Precio por unidad
                        </th>
                        <th class="text-left">
                            Subtotal
                        </th>
                        <th class="text-center">
                            <span class="d-sr-only">Eliminar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <CartBoxItem v-for="detail in details" :key="detail.product.id" :detail="detail"/>
                </tbody>
            </v-table>           

            <div v-else>
                Todavía no tenés productos agregados a tu carrito de compras.
                <p>Podés agregar productos en la <RouterLink to="/">pagina principal</RouterLink>.</p>
            </div>
        </v-card-text>
    </v-card>   
</template>



