<template>
<div id="image-popup" @click="hideImage" v-if="imageShown">
    <h1>X</h1>
    <img :src="imageShown" @click.stop>
</div>
<section>
    <div class="main">
        <div class="col">
            <img @click="showImage" src="../../assets/lawnmower-1.jpg">
            <img @click="showImage" src="../../assets/sprinkler-2.jpg">
            <img @click="showImage" src="../../assets/well-1.jpeg">
        </div>
        <div class="col">
            <img @click="showImage" src="../../assets/gardener-1.jpg">
            <img @click="showImage" src="../../assets/sprinkler-1.jpg">
            <img @click="showImage" src="../../assets/gardener-1.jpg">
        </div>
    </div>
</section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            imageShown: null as string | null
        }
    },
    methods: {
        showImage(event: Event) {
            const target = event.target as HTMLImageElement
            this.imageShown = target.src
        },
        hideImage() {
            this.imageShown = null
        }
    }
}
</script>


<style scoped>
#image-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 6;
}
#image-popup h1 {
    position: fixed;
    top: 2rem;
    right: 2rem;

    color: white;
    font-size: 4rem;
    margin: 0;
    font-family: Roboto;
    cursor: pointer;
}

#image-popup img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}

.col img {
    width: 100%;
    margin: 2rem;
    transition: all 0.2s;
}
.col img:hover {
    cursor: pointer;
    filter: brightness(50%);
}

.main {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}
section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}
.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 2rem;
}

.col img {
  animation: slideInFromSide 1s ease-out; /* Apply the animation */
}

@keyframes slideInFromSide {
  from {
    transform: translateX(100%); /* Start from the right side of the page */
    opacity: 0; /* Start with the image hidden */
  }
  to {
    transform: translateX(0); /* End at its normal position */
    opacity: 1; /* Fully visible */
  }
}
</style>