import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

// styling
import './assets/styles/index.css'

import store from './store'
import App from './App.vue'
import ChecklistDisplay from "./components/ChecklistDisplay.vue"
import OverviewPage from "./components/OverviewPage.vue"

// initialize VueRouter and Vuex in Vue.js
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: OverviewPage },
  { path: '/checklist', component: ChecklistDisplay }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


