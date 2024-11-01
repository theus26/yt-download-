import './assets/main.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { pt } from 'vuetify/locale'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi'
  },
  locale: {
    locale: 'pt',
    messages: { pt }
  }
})
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
