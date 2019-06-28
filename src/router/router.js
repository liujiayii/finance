import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/login'
import Layout from '@/views/layout/layout'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '',
    component: Layout,
    children: [
      {
        component: () => import('@/views/exception/404'),
        name: "404",
        path: "/404",
      }, {
        component: () => import('@/views/exception/403'),
        name: "403",
        path: "/403",
      }, {
        component: () => import('@/views/exception/500'),
        name: "500",
        path: "/500",
      }
    ]
  }, {
    path: '*',
    redirect: '/404'
  }]

// 前端路由表
const constantRouterComponents = {
  Layout,// 基础页面 layout 必须引入
  // 你需要动态引入的页面组件
  Home: () => import('@/views/home/home'),
  /*标的管理*/
  TargetList: () => import('@/views/target/targetList'),
  TargetListDetail: () => import('@/views/target/targetListDetail'),
  TargetDraft: () => import('@/views/target/targetDraft'),
  TargetReject: () => import('@/views/target/targetReject'),
  TargetCheck: () => import('@/views/target/targetCheck'),
  /*收入支出*/
  FinanceList: () => import('@/views/finance/financeList'),
  FinanceReject: () => import('@/views/finance/financeReject'),
  FinanceCheck: () => import('@/views/finance/financeCheck'),
  /*其他设置*/
  Company: () => import('@/views/system/company'),
  User: () => import('@/views/system/user'),
  Role: () => import('@/views/system/role'),
  Access: () => import('@/views/system/access'),
}

export {constantRouterComponents}

export default new VueRouter({
  routes
})
