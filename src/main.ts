import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_SETTING);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
