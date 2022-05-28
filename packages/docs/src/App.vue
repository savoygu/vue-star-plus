<script setup lang="ts">
import VueStarPlusDoc from './markdowns/VueStarPlus.docs.md'
</script>

<template>
  <h1>VueStarPlus playground</h1>
  <VueStarPlusDoc></VueStarPlusDoc>
</template>

<style>
#app {
  margin: 60px auto;
  color: #1f2f3d;
}

h1,
h3 {
  font-weight: normal;
}

.code-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  color: #ccc;
}

.code-wrapper .code-block {
  flex: 1;
}

.code-wrapper .code-block.code-block-third {
  width: 33.33%;
  flex: none;
}
</style>