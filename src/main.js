import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

let app = createApp(App)
app.config.globalProperties.cdn_name = 'http://files.sweetysoft.com'

app.use(store).use(router).mount('#app')

