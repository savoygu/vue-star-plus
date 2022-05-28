### 基础示例

```vue preview
<template>
  <div class="code-wrapper">
    <CodeBlock desc="指定激活颜色">
      <VueStarPlus v-model="active" color="#ff0000">
        <template v-slot:icon>{{ active ? '❤' : '❤' }}</template>
      </VueStarPlus>
    </CodeBlock>
    <CodeBlock desc="指定默认和激活颜色">
      <VueStarPlus v-model="active2" :color="active2 ? 'rgb(247,186,42)' : '#bfcbd9'">
        <template v-slot:icon>{{ active2 ? '❤' : '❤' }}{{count}}</template>
      </VueStarPlus>
    </CodeBlock>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const active = ref(false)

const active2 = ref(true)
const count = ref(100)
watch(active2, (newVal) => {
  newVal ? ++count.value : --count.value
})
</script>
```

### 图片

```vue preview
<template>
  <div class="code-wrapper">
    <CodeBlock desc="切换点赞图片">
      <VueStarPlus v-model="active" color="#ff0000">
        <template v-slot:icon><img :src="image"></template>
      </VueStarPlus>
    </CodeBlock>
    <CodeBlock desc="切换点赞背景">
      <VueStarPlus v-model="active2">
        <template v-slot:icon>
          <span class="vsp-bg" :class="active2 ? 'is-active' : ''"></span>
        </template>
      </VueStarPlus>
    </CodeBlock>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const active = ref(false)
const image = ref('')

const active2 = ref(true)

watchEffect(() => {
  image.value = getImageUrl(active.value ? 'star' : 'unstar')
})

function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href
}
</script>

<style scoped>
.vsp-bg {
  display: block;
  width: 36px;
  height: 36px;
  background: url("/src/assets/unstar.png") no-repeat;
  background-size: contain;
}
.vsp-bg.is-active {
  background-image: url("/src/assets/star.png");
}
</style>
```

### 图标、动画

```vue preview
<template>
  <div class="code-wrapper">
    <CodeBlock class="code-block-third" :desc="`fa-${item.font} 和 ${item.animated}`" v-for="item in stars" :key="item.font">
      <VueStarPlus v-model="item.active" :color="item.color" :animate="`animated ${item.animated}`">
        <template v-slot:icon>
          <i :class="['fa', 'fa-2x', 'fa-' + item.font]"></i>
        </template>
      </VueStarPlus>
    </CodeBlock>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const stars = ref([
  {
    animated: 'tada',
    font: 'bell',
    color: 'rgb(215, 139, 255)',
    active: false,
  },
  {
    animated: 'zoomInDown',
    font: 'heart',
    color: 'rgb(240, 86, 84)',
    active: false,
  },
  {
    animated: 'rubberBand',
    font: 'bomb',
    color: 'rgb(125, 94, 63)',
    active: false,
  },
  {
    animated: 'swing',
    font: 'wrench',
    color: 'rgb(50, 50, 50)',
    active: false,
  },
  {
    animated: 'rotateIn',
    font: 'thumbs-up',
    color: 'rgb(152, 138, 222)',
    active: false,
  },
  {
    animated: 'wobble',
    font: 'weixin',
    color: 'rgb(254, 163, 134)',
    active: false,
  },
  {
    animated: 'rollIn',
    font: 'apple',
    color: 'rgb(253, 145, 145)',
    active: false,
  },
  {
    animated: 'bounceInUp',
    font: 'android',
    color: 'rgb(42, 175, 116)',
    active: false,
  },
  {
    animated: 'jello',
    font: 'linux',
    color: 'rgb(125, 94, 63)',
    active: false,
  }
])
</script>
```