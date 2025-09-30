import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import UpdatePaymentView from '../views/payment/UpdatePaymentView.vue'
import CreatePaymentView from '@/views/payment/CreatePaymentView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Notifier | Home',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        title: 'Notifier | Login',
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationView,
      meta: {
        title: 'Notifier | Register',
      },
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        title: 'Notifier | Dashboard',
        requiresAuth: true,
      },
    },
    {
      path: '/payments/create',
      name: 'CreatePayment',
      component: CreatePaymentView,
      meta: {
        title: 'Notifier | Create payment',
        requiresAuth: true,
      },
    },
    {
      path: '/payments/:id/update',
      name: 'UpdatePayment',
      component: UpdatePaymentView,
      meta: {
        title: 'Notifier | Update payment',
        requiresAuth: true,
      },
    },
  ],
})

routes.beforeEach((to, from, next) => {
  const meta = to.meta as { title?: string }
  const defaultTitle = 'Default Title'
  document.title = meta.title || defaultTitle

  const isAuthenticated = localStorage.getItem('token')
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default routes
