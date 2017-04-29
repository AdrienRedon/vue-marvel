import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Hero from '@/components/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/hero/:id',
      name: 'Hero',
      component: Hero
    }
  ]
})
