import './assets/main.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
const vuetify = createVuetify()
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
