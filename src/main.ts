/**
 * @author kobe
 * @date 2020/12/18 下午3:56
*/
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton,ElCard,ElForm,ElFormItem,ElIcon,ElInput } from "element-plus";
const components = [ElButton,ElCard,ElForm,ElFormItem,ElIcon,ElInput];
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

//验证是否已登录
console.log(router)
router.beforeEach((to, from, next) => {
  console.log(to)
  // 动态改变页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === '/login') {
    localStorage.removeItem('WINABC-TOKEN');
  }
  //判断进入的页面需不需要登录
  if (to.matched.some(res => res.meta.requireAuth)) {
    console.log(localStorage.getItem('WINABC-TOKEN'))
    if (localStorage.getItem('WINABC-TOKEN')) {
      next()
      return false;
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
});

components.forEach(component => {
  app.component(component.name, component);
});
app
  .use(store)
  .use(router)
  .mount("#app");
