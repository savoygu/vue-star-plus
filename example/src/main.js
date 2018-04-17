import Vue from 'vue'
import App from './App.vue'

import Star from '../../src/index.js'
Vue.component('vue-star-plus', Star)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
