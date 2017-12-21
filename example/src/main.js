import Vue from 'vue'
import App from './App.vue'

import Star from '../../src/index.js'
Vue.component('i-vue-star', Star)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
