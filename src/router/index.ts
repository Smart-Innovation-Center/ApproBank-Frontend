import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import Middlewares from '../middlewares'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/login.vue'),
    meta: {
      middleware: [Middlewares.guest],
      title: 'Connexion'
    }
  },
  {
    path: '/otp',
    name: 'otp',
    component: () => import(/* webpackChunkName: "otp" */ '../views/auth/otp.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'OTP'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/pages/profile.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Profil'
    }
  },
  {
    path: '/supply',
    name: 'supply',
    component: () => import(/* webpackChunkName: "supply" */ '../views/pages/supply.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Approvisionnement'
    }
  },
  {
    path: '/demandes',
    name: 'demandes',
    component: () => import(/* webpackChunkName: "demandes" */ '../views/pages/demandes.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Demandes'
    }
  },
  {
    path: '/listeDemandes',
    name: 'listeDemandes',
    component: () => import(/* webpackChunkName: "listeDemandes" */ '../views/pages/listeDemandes.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'listeDemandes'
    }
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '../views/pages/roles.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'roles'
    }
  },
  {
    path: '/utilisateurs',
    name: 'utilisateurs',
    component: () => import(/* webpackChunkName: "utilisateurs" */ '../views/pages/utilisateurs.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'utilisateurs'
    }
  },
  {
    path: '/mesAgences',
    name: 'mesAgences',
    component: () => import(/* webpackChunkName: "demandes" */ '../views/pages/mesAgences.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Mes Agences'
    }
  },
  {
    path: '/comptesBanqueOrange',
    name: 'comptesBanqueOrange',
    component: () => import(/* webpackChunkName: "demandes" */ '../views/pages/comptesBanqueOrange.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Comptes Banque Orange'
    }
  },
  {
    path: '/validateursBanque',
    name: 'validateursBanque',
    component: () => import(/* webpackChunkName: "demandes" */ '../views/pages/validateursBanque.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Validateurs Banque'
    }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import(/* webpackChunkName: "notifications" */ '../views/pages/notifications.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Notifications'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/register.vue'),
    meta: {
      middleware: [Middlewares.guest],
      title: 'Inscription'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/pages/dashboard.vue'),
    meta: {
      middleware: [Middlewares.auth],
      title: 'Tableau de bord'
    }
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/auth/forgotPassword.vue'),
    meta: {
      middleware: [Middlewares.guest],
      title: 'Mot de Passe Oublié'
    }
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import(/* webpackChunkName: "resetPassword" */ '../views/auth/resetPassword.vue'),
    meta: {
      middleware: [Middlewares.guest],
      title: 'Réinitialiser Mot de Passe'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function nextCheck(context, middleware, index){
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);

    nextMiddleware({...context, next: nextMidd})
  }
}

router.beforeEach((to, from, next)=> {
  document.title = `Approbank - ${to.meta.title}`;
  if(to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const ctx = {
      from,
      next,
      router,
      to
    }
    const nextMiddleware = nextCheck(ctx, middleware, 1);
    return middleware[0]({...ctx, next: nextMiddleware});
  }
  return next();
});


export default router
