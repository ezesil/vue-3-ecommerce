//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// Vue router
import router from './router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
import "@mdi/font/css/materialdesignicons.css"
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  theme:{
    defaultTheme: 'dark'
  },
  icons:{
    defaultSet: 'mdi',
    aliases,
    sets:{
      fa,
      mdi
    }
  }
});

const app = createApp(App)

app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
