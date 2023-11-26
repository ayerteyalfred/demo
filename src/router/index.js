import { createRouter, createWebHistory } from  'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import HomePage from '@/views/HomePage.vue'
import AuthPage from '@/views/AuthPage.vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage
        },
        {
            path: '/auth/:id',
            name: 'auth',
            component: AuthPage
        },
        {
            path: '/home/:id',
            name: 'home',
            component: HomePage
        }
        
    ]
})


export default router 