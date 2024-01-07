import type { Category } from '@/models/Category';
import { defineStore } from 'pinia'


export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        _categories: [] as Category[],
        loading: true as Boolean | undefined
    }),
    getters: {
        categories(state){
            return state._categories;
        }
    },
    actions: {
        fetchCategories(){
            this.loading = true;

            fetch('/data/categories.json')
            .then(response => response.json())
            .then((data) => { 
                this._categories = data as Category[]
                this.loading = false;
             })
          },
    }
})