<script lang="ts">
import router from '@/router';
import { useCategoriesStore } from '@/stores/CategoriesStore';
import { mapState } from 'pinia';

export default {
    methods:{
        goToCategory(categoryId: number){
            router.push({
                name: 'categories',
                params:{ categoryId: categoryId }
            })
        },
        clearCategory(){
            router.push({
                name: 'home'
            })
        },
    },
    computed:{
        ...mapState(useCategoriesStore, ['categories', 'loading'])
    }
}

</script>

<template>

<v-list-subheader>Categorías</v-list-subheader>

    <v-list-item v-if="loading == true">
        <v-progress-linear indeterminate/>
    </v-list-item>

    <div v-else>
        <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
            <v-list-item-title>
                Todos los productos
            </v-list-item-title>
        </v-list-item>
        
        <v-list-item 
        :active="$route.name === 'categories' && Number($route.params.categoryId) === category.id"
        v-for="category in categories"
        :key="category.id"
        link
        @click='goToCategory(category.id)'>
        <v-list-item-title>
            {{ category.name }}
        </v-list-item-title>
    </v-list-item>
</div>
    
</template>
