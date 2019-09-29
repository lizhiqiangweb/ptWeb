import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['@/components/home'], resolve)
    },
    {
      path: '/activity',
      name: 'activity',
      component: (resolve) => require(['@/components/activity'], resolve)
    },
    {
      path: '/team',
      name: 'team',
      component: (resolve) => require(['@/components/team'], resolve)
    },
    {
      path: '/familyCase',
      name: 'familyCase',
      component: (resolve) => require(['@/components/familyCase'], resolve)
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: (resolve) => require(['@/components/strategy'], resolve)
    },
    {
      path: '/share',
      name: 'share',
      component: (resolve) => require(['@/components/share'], resolve)
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: (resolve) => require(['@/components/aboutUs'], resolve)
    },
    {
      path: '/strategyContent',
      name: 'strategyContent',
      component: (resolve) => require(['@/components/strategyContent'], resolve)
    },
    {
      path: '/teamNumberDis',
      name: 'teamNumberDis',
      component: (resolve) => require(['@/components/teamNumberDis'], resolve)
    }
  ]
})
