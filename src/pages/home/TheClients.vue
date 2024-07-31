
<template>
    <section>
        <h1>PREVIOUS <span>CLIENTS</span></h1>
        <div id="client-container">
            <div id="clientlist">
                <ClientCard class="clientcard" v-for="client in clients"
                :name="client.name" :key="client.name"></ClientCard>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import ClientCard from './ClientCard.vue';

export default {
    components: {
        ClientCard
    },
    data() {
        return {
            clients: [
                {
                    name: 'Company1',
                },
                {
                    name: 'Company2',
                },
                {
                    name: 'Company3',
                },
                {
                    name: 'Company4',
                },
                {
                    name: 'Company5',
                },
                {
                    name: 'Company6',
                },
                {
                    name: 'Company7',
                },
                {
                    name: 'Company8',
                },
                {
                    name: 'Company9',
                },
                {
                    name: 'Company10',
                },
                {
                    name: 'Company11',
                },
                {
                    name: 'Company12',
                },
            ]
        }
    }
}
</script>

<style scoped>
section {
    min-height: 10rem;
    background-image: url('../../assets/slash-background.svg');
    background-size: cover;
    background-position:top;

    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: black;
    font-family: Roboto, sans-serif;
    font-size: 2rem;
    text-align: center;
}
h1 span {
    color: #FB5A00;
}

#clientlist {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0rem 2rem;
    max-width: 75rem;
}

.clientcard {
    margin: 0.5rem 1rem;
}

#client-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 20rem;
}

</style>