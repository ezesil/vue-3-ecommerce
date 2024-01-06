import { defineStore } from 'pinia'
import type { Category } from '@/models/Category'

const initialCategories: Category[] = [
    { id: 1, name: 'Oficina', description: 'Productos de oficina.' },
    { id: 2, name: 'Computadora', description: 'Accesorios para computadoras.' }
]

export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        _categories: initialCategories as Category[]
    }),
    getters: {
        categories(state){
            return state._categories;
        }
    },
    actions: {

    }
})