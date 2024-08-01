<template>
    <menu @click="closeMenu" v-if="menuOpen">
        <div id="menu-links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/gallery">PORTFOLIO</router-link>
            <router-link to="/contact">CONTACT</router-link>
        </div>
    </menu>
    <header :class="{ absolute: absolute, 'see-through': seeThrough }">
        <router-link to="/">
            <div id="logo">
                    <img src="../assets/leaf-orange.svg">
                    <span>Company</span>
            </div>
        </router-link>
        <div id="links" v-if="!isMobile">
            <router-link to="/">
                <BaseButton class="header-button">HOME</BaseButton>
            </router-link>
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
        <div id="tab" @click="openMenu" v-else>
            ☰
        </div>
    </header>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
    setup() {
        const isMobile = inject<boolean>('isMobile')

        return {
            isMobile
        }
    },
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
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        openMenu() {
            this.menuOpen = true
        },
        closeMenu() {
            this.menuOpen = false
        }
    },
    watch: {
        isMobile() {
            if (!this.isMobile)
                this.menuOpen = false
        }
    },
    mounted() {
        console.log('seeThrough', this.seeThrough)
        console.log('absolute', this.absolute)
    }
}
</script>

<style scoped>
    menu {
        box-sizing: border-box;
        width: 100%;
        height: 100vh;

        position: fixed;
        z-index: 5;
        margin: 0;
        
        background-color: rgba(9, 32, 47, 0.803);
        color: #F45800;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #menu-links {
        width: 30rem;
        height: 50vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #menu-links a {
        color: #F45800;
        font-family: 'Pontano Sans';
        font-size: 4rem;
    }
    #menu-links a:hover {
        color: white;
    }

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
        max-width: 40rem;
    }

    #tab {
        display: flex;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
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