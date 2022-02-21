import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import http from "@/http";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  http,
  render: (h) => h(App),
}).$mount("#app");
