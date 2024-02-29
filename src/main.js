import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "./router";
import store from "./store";
import FooterComponent from "./components/FooterComponent.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "./components/HeaderComponent.vue";

library.add(faUserSecret);
Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("app-footer", FooterComponent);
Vue.component("app-header", HeaderComponent);

// Event bus for separated event handling
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
