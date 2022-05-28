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

<style scoped>
.code-block {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  padding: 30px 0;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

.code-block:nth-child(3n),
.code-block:last-child {
  border-right: none;
}

.code-desc {
  display: inline-block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.code-info {
  position: relative;
}

.code-info ::v-deep(.vue-star-plus) {
  left: 50%;
  margin-left: -50px;
}

.code-info ::v-deep(.vue-star-plus__icon) {
  font-size: 24px;
}
</style>
