import { createApp } from 'vue'
import VueStarPlus from 'vue-star-plus'
import 'vue-star-plus/style.css'
import App from './App.vue'
import VueCode from './components/VueCode.vue'
import CodeBlock from './components/CodeBlock.vue'

const app = createApp(App)
app.component('VueStarPlus', VueStarPlus)
app.component('VueCode', VueCode)
app.component('CodeBlock', CodeBlock)
app.mount('#app')
