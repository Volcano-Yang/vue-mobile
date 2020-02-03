import Vue from "vue";
import Router from "vue-router";
import Login from "@/page/login/index";
import NotFound from "@/page/404.vue";
import Home from "@/page/home/index";
import Temp from "@/page/temp.vue";
// import Layout from "@/component/layout/index.vue";

Vue.use(Router);

/* Layout 页面容器*/


export const constantRoutes = [
  {
    path: "/",
    component: Temp,
    meta: { noAuth: true },
    hidden: true
  },
  {
    path: "/login",
    component: Login,
    meta: { noAuth: true },
    hidden: true
  },
  {
    path: "/404",
    component: NotFound,
    meta: { noAuth: true },
    hidden: true
  },
  {
    path: "/home",
    component: Home,
    meta: { noAuth: true },
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () => new Router({
  // mode: "history", // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

router.beforeEach((to, form, next) => {
  // 判断该路由是否需要先登录
  if (!to.meta.noAuth) {
    if (window.sessionStorage.getItem("token")) { // 获取当前的token是否存在
      next();
    }
    else {
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }
  else {
    next();
  }
 
  if (!to.matched.length) {
    next({
      path: "/error/404",
      replace: true
    });
  } else {
    next();
  }
});

export default router;