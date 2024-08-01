import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'

import BaseButton from './components/BaseButton.vue'
import BaseTitle from './components/BaseTitle.vue'
import TheHome from './pages/home/TheHome.vue'
import TheAbout from './pages/about/TheAbout.vue'
import TheGallery from './pages/gallery/TheGallery.vue'
import TheContact from './pages/contact/TheContact.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheHome },
        { path: '/about', component: TheAbout },
        { path: '/gallery', component: TheGallery },
        { path: '/contact', component: TheContact },
    ],
})

app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)

app.use(router)

app.mount('#app')
