<template>
    <div>
        <h4>{{ name }}</h4>
    </div>
</template>

<script lang="ts">
export default {
    props: ['name']
}
</script>

<style scoped>
div {
    background-color: #FF820F;
    width: 15rem;
    height: 3.5rem;
    border-radius: 1rem;
}

h4 {
    text-align: center;
    color: white;
}
</style>