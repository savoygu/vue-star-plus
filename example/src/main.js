import Vue from 'vue'
import App from './App.vue'

import VueStarPlus from '../../lib/vue-star-plus'
import '../../lib/style.css'
Vue.component('vue-star-plus', VueStarPlus)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
