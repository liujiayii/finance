import router from '../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {constantRouterComponents} from '../router'

const menuData = [
  {
    component: "Layout",
    icon: "el-icon-s-home",
    children: [
      {name: "Home"},
    ],
  },
  {
    component: "Layout",
    icon: "el-icon-s-management",
    name: "Target",
    children: [
      {name: "TargetList"},
      {name: "TargetDraft"},
      {name: "TargetReject"},
      {name: "TargetCheck"}
    ],
  },
  {
    component: "Layout",
    icon: "el-icon-s-finance",
    name: "Finance",
    children: [
      {name: "FinanceList"},
      {name: "FinanceReject"},
      {name: "FinanceCheck"}
    ],
  },
  {
    component: "Layout",
    icon: "el-icon-s-tools",
    name: "System",
    children: [
      {name: "Company"},
      {name: "User"},
      {name: "Role"},
      {name: "Access"}
    ],
  },
]

window.sessionStorage.setItem('menu', JSON.stringify(menuData))
/*格式化 后端 结构信息并递归生成层级路由表*/
const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const currentRouter = {
      // 路由地址 动态拼接生成如 /dashboard/workplace
      path: `/${parent && parent.name || ''}/${item.name}`,
      // 路由名称，建议唯一
      name: item.name || item.key || '',
      icon: item.icon || '',
      // 该路由对应页面的 组件
      component: constantRouterComponents[item.component || item.name],
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {title: parent && parent.name || ''}
    }
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generator(item.children, currentRouter)
    }
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    currentRouter.path = currentRouter.path.replace('//', '/')
    return currentRouter
  })
}
/*路由守卫*/
router.addRoutes(generator(menuData))
router.beforeEach((to, form, next) => {
  NProgress.start()
  if (!window.sessionStorage.getItem('userName') && to.path !== '/login') {
    return next({path: '/login'})
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})
