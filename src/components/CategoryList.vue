<script lang="ts">
import { type Category } from '../models/Product.ts'


export default {
    data(){
        return {
            categories: <Array<Category>>[
                {
                    id: 1,
                    name: "Tecnología"
                },
                {
                    id: 2,
                    name: "Juguetes"
                }
            ]
        };
            
    }
}

</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
                <v-list-item
                  v-for="category in categories"
                  :key="category.id"
                  link>
                  <v-list-item-title>
                    {{ category.name }}
                  </v-list-item-title>
              </v-list-item>
            <v-divider class="my-2"></v-divider>   
            
            <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Ordenar por precio">              
            </v-list-item>
        </v-list>
    </v-sheet>
</template>