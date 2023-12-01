<script setup lang="ts">

import type { CartDetails } from './Product';
import type { PropType } from 'vue';

    defineProps({ 
        details: {
            type: Object as PropType<Array<CartDetails | undefined>>,
            required: true
        },
    })


</script>

<template>
    <li v-for="product in details">
        <p>Id: {{product?.id}}</p>
        <p>Nombre: {{product?.name}}</p>
        <p>Cantidad: {{product?.count}}</p>
        <hr>
    </li>
</template>



