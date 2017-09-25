import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Recommend from 'components/Recommend/Recommend'
import Search from 'components/Search/Search'
import Singer from 'components/Singer/Singer'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/Rank',
      component: Rank
    },
    {
      path: '/Recommend',
      component: Recommend
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
