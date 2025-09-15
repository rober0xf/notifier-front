import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import ListPaymentView from '../views/payment/ListPaymentView.vue'
import UpdatePaymentView from '../views/payment/UpdatePaymentView.vue'
import CreatePaymentView from '@/views/payment/CreatePaymentView.vue'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/payments',
      name: 'Payments',
      component: ListPaymentView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/payments/:id',
      name: 'Payment',
      component: ListPaymentView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/payments/create',
      name: 'CreatePayment',
      component: CreatePaymentView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/payments/:id/update',
      name: 'UpdatePayment',
      component: UpdatePaymentView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

routes.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default routes
