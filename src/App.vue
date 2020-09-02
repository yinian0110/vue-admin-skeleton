<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Vue-Skeleton',
};
</script>

<style lang="scss">
@import "styles/global/style";
</style>
