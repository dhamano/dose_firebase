import Vue from "vue";
import Buefy from "buefy";
import { firestorePlugin } from "vuefire";

import "buefy/dist/buefy.css";

import App from "./App.vue";

Vue.use(Buefy);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
