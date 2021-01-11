import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index'
// Vue.config.productionTip = false
//d
createApp(App).use(router).mount('#app')

// new Vue({
//   el:'#app',
//   router,
//   render: h=>h(App)
// })
