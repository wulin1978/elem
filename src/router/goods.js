import Vue from 'vue'
import Router from 'vue-router'
import foods from '@/components/foods/foods'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'goods-active',
  linkExactActiveClass: 'goods-exactactive',
  routes: [
    {
      path: '/goods/:name',
      components: {
        goodsview: foods
      }
    }
  ]
})
