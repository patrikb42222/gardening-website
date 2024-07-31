<script setup lang="ts">
</script>

<template>
    <section>
        <div class='main'>
            <h1 class="white">UPGRADE</h1>
            <h1 class="orange" style="margin-top: 0">YOUR GARDEN</h1>
            <h2>We design and build sprinkler systems and navigation fields for autonomous lawnmowers</h2>
            <div>
                <router-link to="/contact">
                    <BaseButton id="cta">CONTACT</BaseButton>
                </router-link>
                <router-link to="/gallery">
                    <BaseButton id="cta2">GALLERY</BaseButton>
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main {
    color: white;
    margin: auto 10%;
}

.main h1 {
    font-size: 4rem;
    font-weight: 100;
    font-family: 'Julius Sans One', sans-serif;
    margin-bottom: 0;
    line-height: 4rem;
}
.main h2 {
    font-family: Roboto, sans-serif;
    font-size: 2rem;
    font-weight: 300;
    max-width: 50rem;
}

section {
    background-image: url('../../assets/sprinkler-1.jpg');
    height: 50rem;
    width: 100%;
    background-position: 0 60%;
    background-size: cover;
    display: flex;
}

#cta {
    margin-right: 3rem;
    margin-bottom: 1rem;

    --background-color: #FB5A00;
    --border-radius: 10rem;
    --padding: 0rem 3rem;

    --hover-background: white;
}
#cta2 {
    --background-color: rgba(0,0,0,0.2);
    --border-radius: 10rem;
    --padding: 0rem 3rem;
    --border-color: #FB5A00;
    --border: 2px solid #FB5A00;

    --hover-background: white;
    --hover-border-color: transparent;
}
</style>