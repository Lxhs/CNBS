import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children:[{
          path: '/',
          name: 'home',
          component: () => import('./views/home/index')
      }]
    },
    {
      path: "/caseShare",
      name: "caseShare",
      component: Home,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children:[{
          path: '/caseShare',
          name: 'caseShare',
          component: () => import('./views/caseShare/index')
      }]
    },
      {
          path: "/solution",
          name: "solution",
          component: Home,
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          children:[{
              path: '/solution',
              name: 'solution',
              component: () => import('./views/solution/index')
          }]
      },
      {
          path: "/product",
          name: "product",
          component: Home,
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          children:[{
              path: '/product',
              name: 'product',
              component: () => import('./views/product/index')
          },{
              path: 'detail',
              name: 'product',
              component: () => import('./views/product/component/prdDetail')
          }]
      }
  ]
});
