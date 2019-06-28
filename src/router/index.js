import router from './router'
import NProgress from 'nprogress'
import {constantRouterComponents} from './router'
/* 格式化后端结构信息并递归生成层级路由表 */
const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const currentRouter = {
      // 路由地址 动态拼接生成如 /dashboard/workplace
      path: `/${parent && parent.path || ''}/${item.url.split('/')[item.url.split('/').length - 1]}`,
      // 路由名称，建议唯一
      name: item.url || item.key || '',
      icon: item.icons || '',
      // 该路由对应页面的 组件
      component: constantRouterComponents[parent ? item.url.split('/')[item.url.split('/').length - 1] : 'Layout'],
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {first: parent && (item.url.split('/')[2] ? `${parent.name}/${item.url.split('/')[1]}` : '') || ''}
    }
    // 是否有子菜单，并递归处理
    if (item.permissions && item.permissions.length > 0) {
      // Recursion
      currentRouter.children = generator(item.permissions, currentRouter)
    }
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    currentRouter.path = currentRouter.path.replace('///', '/')
    currentRouter.path = currentRouter.path.replace('//', '/')
    return currentRouter
  })
}

/* 路由守卫 */
let reAddRoutes = true
router.beforeEach((to, form, next) => {
  NProgress.start()
  if ((to.path !== '/404') && (to.path !== '/login')) {
    window.sessionStorage.setItem('path', to.path)
    window.sessionStorage.setItem('query', JSON.stringify(to.query))
  }
  if (!window.sessionStorage.getItem('userName') && to.path !== '/login') {
    return next({path: '/login'})
  } else if (reAddRoutes) {
    const menu = JSON.parse(window.sessionStorage.getItem('menu')) || []
    reAddRoutes = false
    router.addRoutes(generator([...menu]))
    next({path: window.sessionStorage.getItem('path'), query: JSON.parse(window.sessionStorage.getItem('query'))})
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export {router, generator}
