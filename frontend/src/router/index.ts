import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/pages/Products.vue'
import ProductsList from '@/views/products/ProductsList.vue'
import ProductsForm from '@/views/products/ProductsForm.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/products',
    component: Products,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: ProductsList
      },
      {
        path: 'add',
        name: 'ProductAdd',
        component: ProductsForm
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
