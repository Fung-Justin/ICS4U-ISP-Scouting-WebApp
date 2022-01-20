import { createRouter, createWebHistory } from 'vue-router'



  

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/grid',
        name: 'Grid',
        component: () =>
            import ('../views/Grid.vue')
    },
    {
        path: '/create-account',
        name: 'Create Account',
        component: () =>
            import ('../views/CreateAccount.vue')
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
    },
    {
        path: '/playback',
        name: 'Playback',
        component: () =>
            import ('../views/Playback.vue')
    },
    {
        path: '/matches',
        name: 'Matches',
        component: () =>
            import ('../views/Matches.vue')
    },
    {
        path: '/login',
        name: 'Password',
        component: () =>
            import ('../views/Login.vue')
    }
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/create-account'];
    const authRequired = !publicPages.includes(to.path);
    console.log(authRequired);
    const loggedIn = localStorage.getItem('user');
   console.log(loggedIn);
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
     router.push("/")
    } else {
      next();
    }
  });
  

export default router