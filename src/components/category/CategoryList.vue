<script lang="ts">
import { type Category } from '../../models/Category'
import router from '@/router';
import { useProductsStore } from '../../stores/ProductsStore';
import { mapActions, mapState } from 'pinia';
import OrderOptions from '../left/OrderOptions.vue'

export default {
    data(){
        return {
            categories:
            [
                { id: 1, name: 'Oficina', description: 'Productos de oficina.' },
                { id: 2, name: 'Computadora', description: 'Accesorios para computadoras.' }
            ] as Category[],
        };
        
    },
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
        ...mapState(useProductsStore, ['order'])
    },
    components:{
        OrderOptions
    }
}

</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorías</v-list-subheader>
            <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
                <v-list-item-title>
                    Todas
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
            <v-divider class="my-2"></v-divider>   

            <OrderOptions/>
            
        </v-list>
    </v-sheet>
</template>