import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import OtpInput from "@bachdgvn/vue-otp-input";
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

Vue.component("v-otp-input", OtpInput);
Vue.use(EnlargeableImage);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

