import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import familyCase from '@/components/familyCase'
import team from '@/components/team'
import activity from '@/components/activity'
import strategy from '@/components/strategy'
import share from '@/components/share'
import aboutUs from '@/components/aboutUs'
import strategyContent from '@/components/strategyContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/familyCase',
      name: 'familyCase',
      component: familyCase
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: strategy
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/strategyContent',
      name: 'strategyContent',
      component: strategyContent
    }
  ]
})
