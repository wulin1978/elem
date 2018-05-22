import Vue from 'vue'
import Router from 'vue-router'
import business from '@/components/business/business'
import comment from '@/components/comment/comment'
import goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exactactive',
  routes: [
    {
      path: '/', redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    }
  ]
})
