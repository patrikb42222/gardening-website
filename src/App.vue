<script setup lang="ts">
import { computed, provide } from 'vue';
import TheFooter from './components/TheFooter.vue';
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router';

const { width, height } = useWindowSize()
const route = useRoute()

const isMobile = computed(() => {
  console.log(width.value, height.value);
  return width.value < height.value;
})
const seeThrough = computed(() => {
  return route.fullPath === '/'
})
const absolute = computed(() => {
  return route.fullPath === '/'
})

provide('isMobile', isMobile)
</script>

<template>
  <div id="main">
    <BaseHeader :seeThrough="seeThrough" :absolute="absolute"></BaseHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<style scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>
