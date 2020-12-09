import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VCharts from 'v-charts'
import Chakra, {CThemeProvider, CReset} from '@chakra-ui/vue'
Vue.use(Chakra)

Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
    // router,
    render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
