import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FooterComponent from "./components/FooterComponent.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.component("app-footer", FooterComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
