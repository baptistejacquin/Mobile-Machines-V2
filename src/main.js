import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router'
import MachineListe from "./MachineListe.vue";
import MachineMap from "./MachineMap.vue";
import Machine from "./Machine.vue";
import ajoutMachine from './ajoutMachine';
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: require('../config.json').key
    }
})

Vue.use(VueRouter)

const routes = [
    { path: '/liste', component: MachineListe },
    { path: '/machine', component: ajoutMachine },
    { path: '/Map', component: MachineMap }
]

const router = new VueRouter({
    routes
})
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
