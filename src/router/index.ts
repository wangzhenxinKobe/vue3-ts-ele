import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
    meta: {requireAuth: true},
    redirect: {path: '/home'},
    children: [
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
        name: '首页'
      },
      {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "About" */ "../views/About.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
