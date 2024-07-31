<script setup lang="ts">
</script>

<template>
    <section>
        <div id="card">
            <h1>
                ABOUT ME
            </h1>
            <h3>
                I spent over a <b>decade</b> designing and building <i>sprinkler systems</i>, <i>beautiful gardens</i>, navigation grids for <i>robotic lawnmowers</i>.
            </h3>
            <BaseButton class="button">CONTACT</BaseButton>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 50rem;
    background-position: center;
    background-size: cover;
    background-image: url('../../assets/gardener-1.jpg');
}

#card {
    box-sizing: border-box;
    position: relative;
    top: 5rem;
    left: 20%;
    width: 20rem;
    height: 30rem;
    background-color: white;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

h1 {
    font-family: Poppins;
    font-size: 2rem;
}

h3 {
    font-family: Roboto, sans-serif;
    font-weight: 300;
}

bold {
    font-weight: 900;
}

italic {
    font-style: italic;
}

.button {
    --background-color: #FB5A00;
    --font-size: 1.3rem;
    --border: 2px solid #FB5A00;
    --hover-border-color: 2px soli #FB5A00;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    width: 10rem;
    height: 3.5rem;
}
</style>