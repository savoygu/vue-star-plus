<template>
  <div class="code-block">
    <span class="code-desc">{{ desc }}</span>
    <div class="code-info">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  desc: String
})
</script>

<style lang="scss" scoped>
@include b(code-block) {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  padding: 30px 0;
  border-right: 1px solid var(--mdp-border-color);
  border-bottom: 1px solid var(--mdp-border-color);
  box-sizing: border-box;

  @include p('&:nth-child(3n)', '&:last-child') {
    border-right: none;
  }
}

.code-desc {
  display: inline-block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.code-info {
  position: relative;

  ::v-deep(.vue-star-plus) {
    left: 50%;
    margin-left: -50px;
  }

  ::v-deep(.vue-star-plus__icon) {
    font-size: 24px;
  }
}
</style>
