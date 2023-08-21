# vue-star-plus

<p>
  <a href="https://www.npmjs.com/package/vue-star-plus" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vue-star-plus.svg">
  </a>
  <a href="https://www.npmjs.com/package/vue-star-plus" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/dt/vue-star-plus">
  </a>
</p>

| Feature        | [vue-star](https://github.com/OYsun/VueStar) | vue-star-plus |
| -------------- | -------------------------------------------- | ------------- |
| Icon           | ✅                                            | ✅             |
| Animation      | ✅                                            | ✅             |
| Image          | ❌                                            | ✅             |
| Default Active | ❌                                            | ✅             |

## Install

### Vue3

```bash
npm install vue-star-plus
```

```javascript
import { createApp } from 'vue'
import VueStarPlus from 'vue-star-plus'
import 'vue-star-plus/style.css'
const app = createApp()
// Global register
app.component('VueStarPlus', VueStarPlus)
```

### Vue2

```bash
npm install vue-star-plus@2
```

```javascript
import Vue from 'vue'
import VueStarPlus from 'vue-star-plus' // same with vue3 version
import 'vue-star-plus/style.css'  // same with vue3 version
// Global register
Vue.component('VueStarPlus', VueStarPlus)
```

## Usage

[DEMO](https://savoygu.github.io/vue-star-plus/)

### Basic Usage

```javascript
<template>
  <VueStarPlus v-model="active" color="#ff0000">
    <template #icon>❤</template>
  </VueStarPlus>
</template>

<script setup>
const active = ref(false)
</script>
```

### Background Image

```javascript
<template>
  <VueStarPlus v-model="active" color="#ff0000">
    <template #icon>
      <span class="vsp__bgi" :class="{ 'is-active' : active }" />
    </template>
  </VueStarPlus>
</template>

<script setup>
const active = ref(false)
</script>

<style scoped>
.vsp__bgi {
  display: block;
  width: 36px;
  height: 36px;
  background: url("/src/assets/inactive.png") no-repeat;
  background-size: contain;
}
.vsp__bgi.is-active {
  background-image: url("/src/assets/active.png");
}
</style>
```


### Animated

```javascript
<template>
  <VueStarPlus v-model="active"
    color="#ff0000"
    :animated="['animate__animated', 'animate__tada']">
    <template #icon>❤</template>
  </VueStarPlus>
</template>

<script setup>
const active = ref(false)
</script>

<style scoped>
@import 'animate.css';
</style>
```

## License

The vue-star-plus package is also open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
