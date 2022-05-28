<template>
  <div class="VueStar">
    <div class="VueStar__ground">
      <div class="VueStar__icon" @click="toggle" :class="animateClass" :style='{ color: colorValue }'>
        <slot name="icon"></slot>
      </div>
      <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active': active }"></div>
    </div>
  </div>
</template>

<script>
import { isColors } from '../utils/colorRE.js'

export default {
  name: 'VueStarPlus',

  props: {
    value: Boolean,
    animate: String,
    color: {
      type: String,
      validator: isColors
    }
  },

  methods: {
    toggle() {
      this.$emit('input', !this.active)
      this.$emit('change', this)
    }
  },

  data() {
    return {
      active: this.value,
    }
  },

  watch: {
    value(newVal, oldVal) {
      if (this.active === newVal) return
      this.active = newVal
    }
  },

  computed: {
    animateClass() {
      return this.active ? this.animate : ''
    },
    colorValue() {
      return this.active ? this.color : ''
    }
  },

  mounted() {
    if (this.color && !isColors(this.color)) {
      console.error('this color prop must be hex or rgb pattern  ---VueStarPlus')
    }
  }
}
</script>

<style lang="less">
@import '../style/main.less';
</style>