import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import BlogPage from '@/components/BlogPage'
import MainContent from '@/components/MainContent'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/blog',
      component: BlogPage,
      children: [
        {
          path: '',
          component: MainContent
        },
        {
          path: ':id',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
