<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '../../stores/ProductsStore';
import { ProductNameSorter, ProductPriceSorter } from '@/models/OrderTypes';

export default {
    data(){
        return{
            ProductNameSorter,
            ProductPriceSorter
        }
    },
    methods:{
        ...mapActions(useProductsStore, [
            'sortBy',
            'clearOrder'
        ])
    },
    computed:{
        ...mapState(useProductsStore, ['order', 'sorters']),
    }
}
</script>


<template>

<v-list-subheader>Ordenar por precio</v-list-subheader>
    <v-list-item
    @click="sortBy(ProductPriceSorter.AscSortName)"
    :active="order === ProductPriceSorter.AscSortName"
    link
    title="Menor precio">              
    </v-list-item>

    <v-list-item
    @click="sortBy(ProductPriceSorter.DescSortName)"
    :active="order === ProductPriceSorter.DescSortName"
    link
    title="Mayor precio">              
    </v-list-item>

    <v-list-item
    v-if="order === ProductPriceSorter.AscSortName || order === ProductPriceSorter.DescSortName"
    @click="clearOrder"
    link
    title="Quitar filtro">              
    </v-list-item>

<v-list-subheader>Ordenar por nombre</v-list-subheader>
    <v-list-item
    @click="sortBy(ProductNameSorter.AscSortName)"
    :active="order === ProductNameSorter.AscSortName"
    link
    title="De A a la Z">              
    </v-list-item>
    <v-list-item
    @click="sortBy(ProductNameSorter.DescSortName)"
    :active="order === ProductNameSorter.DescSortName"
    link
    title="De Z a la A">              
    </v-list-item>
    <v-list-item
    v-if="order === ProductNameSorter.AscSortName || order === ProductNameSorter.DescSortName"
    @click="clearOrder"
    link
    title="Quitar filtro">              
    </v-list-item>


</template>






