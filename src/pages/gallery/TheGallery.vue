<script setup lang="ts">
import TheImages from './TheImages.vue';
</script>

<template>
    <div class="background">
        <img src="../../assets/geometry-1.svg" class="background-element" id="geo-1">
    </div>
    <div>
        <BaseTitle id="title">OUR SERVICES</BaseTitle>
        <TheImages></TheImages>
    </div>
</template>
<style scoped>
#geo-1 {
    width: 100rem;
    top: 20rem;
    left: 10rem;
    opacity: 0.5;
}
#title {
    margin: 2rem 0rem 10rem 0rem;
}
</style>