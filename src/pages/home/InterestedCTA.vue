<template>
    <section>
        <router-link to="/contact"
            @mouseover="toggleHover(true)"
            @mouseleave="toggleHover(false)">
            <h1 id="interested" :class="{ 'fade-out': hover, 'fade-in': !hover }">
                INTERESTED?
            </h1>
            <h1 id="contact" :class="{ 'fade-in': hover, 'fade-out': !hover }">CONTACT</h1>
        </router-link>
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
    height: 7rem;
    font-size: 3rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; /* Make sure section is the reference point for absolute positioning */
}

h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    font-family: 'Stick No Bills';
    position: absolute; /* Allows overlap */
    transition: transform 1s ease;
}

#interested {
    transform-origin: bottom;
    z-index: 1; /* Ensure it's beneath the contact text when shrinking */
}

#contact {
    transform-origin: top;
    z-index: 2; /* Ensure it’s on top of the interested text when growing */
}

.fade-out {
    transform: scaleY(0);
}

.fade-in {
    transform: scaleY(1);
}

a {
    min-width: 20rem;
    position: relative; /* Ensure it's the reference point for absolute positioning */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: black
}
</style>
