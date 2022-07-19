<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

const hexColors = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
const rgbColors = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g

const isColor = (color: string) => {
  return hexColors.test(color) || rgbColors.test(color)
}

export default defineComponent({
  name: 'VueStarPlus',
  props: {
    modelValue: Boolean,
    animate: String,
    color: {
      type: String,
      validator: isColor
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isActive = ref(props.modelValue)

    watch(() => props.modelValue, (newVal, oldVal) => {
      if (isActive.value !== newVal) {
        isActive.value = newVal
      }
    })

    const handleToggle = () => {
      emit('update:modelValue', !isActive.value)
    }

    const iconClass = computed(() => {
      return isActive.value ? props.animate : ''
    })

    const iconStyle = computed(() => {
      return {
        color: isActive.value ? props.color : ''
      }
    })

    return {
      iconClass,
      iconStyle,
      isActive,
      handleToggle
    }
  }
})
</script>

<template>
  <div class="vue-star-plus">
    <div class="vue-star-plus__ground">
      <div :class="['vue-star-plus__icon', iconClass]" :style="iconStyle" @click="handleToggle">
        <slot name="icon"></slot>
      </div>
      <div :class="['vue-star-plus__decoration', { 'vue-star-plus__decoration--active': isActive }]"></div>
    </div>
  </div>
</template>
