<script setup lang="ts">
import VueStarPlusDoc from './components/VueStarPlus.md'
import pkg from 'vue-star-plus/package.json'
</script>

<template>
  <header>
    <h1>VueStarPlus <i>V{{ pkg.version }}</i></h1>
    <a href="https://github.com/savoygu/vue-star-plus" target="_blank"> Github </a>
  </header>
  <VueStarPlusDoc></VueStarPlusDoc>
  <footer>Create by <a href="https://github.com/savoygu" target="_blank">@savoygu</a></footer>
</template>

<style lang="scss">
#app {
  width: 1200px;
  margin: 0 auto;
  color: #1f2f3d;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;


  h1 {
    position: relative;
    margin: 0;

    i {
      position: absolute;
      top: 0;
      right: -42px;
      font-size: 14px;
      font-style: normal;
      color: #f05654;
    }
  }
}

footer {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

header,
footer {
  a {

    &:visited,
    &:hover {
      color: #0550AE;
    }
  }
}


/* common */
.code-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
  color: #ccc;

  .code-block {
    flex: 1;

    &.code-block-third {
      width: 33.33%;
      flex: none;
    }
  }
}

/* reset */
h1,
h3 {
  font-weight: normal;
}

a {
  text-decoration: none;
}
</style>