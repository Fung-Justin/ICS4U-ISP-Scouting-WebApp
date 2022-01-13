import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterUser from '../views/RegisterUser.vue'

const routes = [{
        path: '/',
        name: 'Password',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/create-account',
        name: 'Create Account',
        component: () =>
            import ('../views/Create-Password.vue')
    },
    {
        path: '/scout',
        name: 'Scout Match',
        component: () =>
            import ('../views/Scout.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/RegisterUser.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router