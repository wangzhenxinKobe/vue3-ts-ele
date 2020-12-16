import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton } from "element-plus";
const components = [ElButton];
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});
app
  .use(store)
  .use(router)
  .mount("#app");
