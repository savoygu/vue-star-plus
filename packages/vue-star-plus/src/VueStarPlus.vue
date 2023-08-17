<script lang="ts">
import { computed, defineComponent } from 'vue'

const hexColors = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
const rgbColors =
  /^[rR][gG][Bb][Aa]?[(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[)]{1}$/g

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
    const iconClass = computed(() => {
      return props.modelValue ? props.animate : ''
    })

    const iconStyle = computed(() => {
      return {
        color: props.modelValue ? props.color : ''
      }
    })

    const handleToggle = () => {
      emit('update:modelValue', !props.modelValue)
    }

    return {
      iconClass,
      iconStyle,
      handleToggle
    }
  }
})
</script>

<template>
  <div class="vue-star-plus">
    <div class="vue-star-plus__ground">
      <div
        :class="['vue-star-plus__icon', iconClass]"
        :style="iconStyle"
        @click="handleToggle"
      >
        <slot name="icon"></slot>
      </div>
      <div
        :class="[
          'vue-star-plus__decoration',
          { 'vue-star-plus__decoration--active': modelValue }
        ]"
      ></div>
    </div>
  </div>
</template>
