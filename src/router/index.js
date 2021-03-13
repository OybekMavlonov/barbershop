import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import PriceList from '@/components/PriceList.vue'
import Market from '@/components/Market/Market.vue'
import SingleProduct from '@/components/Market/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/price',
    name: 'PriceList',
    component: PriceList
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/market/:id',
    name: 'SingleProduct',
    component: SingleProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
