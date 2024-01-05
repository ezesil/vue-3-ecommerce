<script lang="ts">
import type { CartDetails } from '@/models/CartDetails';
import type { PropType } from 'vue';
import { useCartStore } from '../../stores/CartDetailsStore';
import { mapActions } from 'pinia';


export default {
    props:{
        detail:{
            type: Object as PropType<CartDetails>,
            required: true   
        }
    },
    methods:{
        ...mapActions(useCartStore, ['incrementProductCount', 'decrementProductCount', 'deleteProduct'])
    }
}

</script>


<template>

    <tr>
        <td>
            <v-avatar size="40px">
                <v-img :src="detail.product.image"/>
            </v-avatar>
            
            {{ detail.product.name }}     
        </td>

        <td class="text-center">
            <v-btn 
            icon="mdi-minus"
            size="x-small" 
            @click="decrementProductCount(detail.product.id)"/>
            
            {{detail.count}}
            
            <v-btn 
            icon="mdi-plus"
            size="x-small" 
            @click="incrementProductCount(detail.product.id)"/>

            
        </td>

        <td>{{ detail.product.price }}</td>

        <td>{{ detail.product.price * detail.count }}</td>

        <td class="text-center">
            <v-btn 
                icon="mdi-delete"
                size="x-small" 
                @click="deleteProduct(detail.product.id)"/>
        </td>
    </tr>
</template>







