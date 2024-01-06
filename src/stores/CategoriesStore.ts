import { defineStore } from 'pinia'
import type { Category } from '@/models/Category'
import categoriesData from '../data/categories.json'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        _categories: categoriesData as Category[]
    }),
    getters: {
        categories(state){
            return state._categories;
        }
    },
    actions: {

    }
})