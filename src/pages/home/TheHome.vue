<template>
    <div class="background">
        <img src="../../assets/geometry-1.svg" class="background-element" id="geo-1">
        <img src="../../assets/geometry-1.svg" class="background-element" id="geo-2">
    </div>
    <div id="content">
        <TheHeroes></TheHeroes>
        <TheClients></TheClients>
        <AboutMe id="aboutme"></AboutMe>
        <InterestedCTA id="interested"></InterestedCTA>
    </div>
</template>

<script lang="ts">
import TheClients from './TheClients.vue';
import TheHeroes from './TheHeroes.vue';
import AboutMe from './AboutMe.vue';
import InterestedCTA from './InterestedCTA.vue';

export default {
    components: {
        TheHeroes,
        TheClients,
        AboutMe,
        InterestedCTA
    }
}
</script>

<style scoped>

#aboutme {
    margin-top: 4rem;
    margin-bottom: 5rem;
}

#interested {
    margin-bottom: 6rem;
}

#content {
    background-color: transparent;
    width: 100%;
}


#geo-1 {
    width: 100rem;
    bottom: 10rem;
    right: -24rem;
    opacity: 0.5;
}
#geo-2 {
    width: 50rem;
    bottom: -15rem;
    left: -10rem;
    opacity: 0.5;
}
</style>