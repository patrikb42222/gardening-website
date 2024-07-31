<template>
    <section>
        <div
                @mouseover="toggleHover(true)"
                @mouseleave="toggleHover(false)">
            <h1 v-if="!hover">
                INTERESTED?
            </h1>
            <h1 v-else>CONTACT</h1>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            hover: false
        }
    },
    methods: {
        toggleHover(enabled: boolean) {
            this.hover = enabled
        }
    }
}
</script>

<style scoped>
section {
    background-color: white;
    height: 10rem;
    font-size: 4rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    padding: 0;
    margin: 0;
    font-family: 'Stick No Bills';
}
</style>