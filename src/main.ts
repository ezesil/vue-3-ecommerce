//import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import ProductList from './examples/ProductList.vue'
//import router from './router'

const app = createApp(ProductList)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
