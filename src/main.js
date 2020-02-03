import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 修改主题改这里
import App from "./App.vue";
import api from "./api/index";
import router from "./router";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  el: "#app",
  router,
  // store,
  render: h => h(App)
});
