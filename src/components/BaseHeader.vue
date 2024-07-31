<template>
    <header :class="{ absolute: absolute, 'see-through': seeThrough }">
        <router-link to="/">
            <div id="logo">
                    <img src="../assets/leaf-orange.svg">
                    <span>Company</span>
            </div>
        </router-link>
        <div id="links" v-if="!isMobile">
            <router-link to="/about">
                <BaseButton class="header-button">ABOUT</BaseButton>
            </router-link>
            <router-link to="/gallery">
                <BaseButton class="header-button">PORTFOLIO</BaseButton>
            </router-link>
            <router-link to="/contact">
                <BaseButton class="header-button" id="contact">CONTACT</BaseButton>
            </router-link>
        </div>
        <div id="tab" v-else>
            ☰
        </div>
    </header>
</template>

<script lang="ts">
export default {
    props: {
        absolute: {
            type: Boolean,
            default: false,
            required: false,
        },
        seeThrough: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    inject: ['isMobile'],
    mounted() {
        console.log('seeThrough', this.seeThrough)
        console.log('absolute', this.absolute)
    }
}
</script>

<style scoped>
    header {
        box-sizing: border-box;
        padding: 1rem;

        color: #F45800;
        background-color: black;
        display: flex;
        justify-content: space-between;
    }


    header.absolute {
        position: absolute;
        width: 100%;
        top: 0;
    }

    header.see-through {
        background-color: rgba(0,0,0,0.35);
    }

    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        color: #F45800;

        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    #logo:hover {
        color: white;
    }

    #logo img {
        width: 2rem;
    }
    #logo span {
        font-size: 2rem;
        margin-left: 1rem;
        font-family: 'Seaweed Script', cursive;
    }

    #links {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        max-width: 30rem;
    }

    #tab {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
    }

    .header-button {
        --font-family: 'Julius Sans One';
        --font-weight: 100;
        --padding: 0rem 2rem;
        --font-size: 1rem;
    }
    #contact {
        --font-family: 'Julius Sans One';
        --font-weight: 100;
        --background-color: #F45800;
        --hover-background: white;
    }
</style>