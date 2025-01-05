import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/mechta-test', // Keep the '/mechta-test' as the base path
    component: ProductList,
    name: 'Home',
    meta: { label: 'Главная' },
  },
  {
    path: '/product/:id',
    component: ProductDetail,
    name: 'ProductDetail',
    meta: { label: 'Детали товара' },
  },
]

const router = createRouter({
  history: createWebHistory('/mechta-test/'), // Set the base path for history mode
  routes,
})

export default router
