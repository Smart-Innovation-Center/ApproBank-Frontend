import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import OtpInput from "@bachdgvn/vue-otp-input";
import EnlargeableImage from '@diracleo/vue-enlargeable-image';
import moment from 'moment'

Vue.component("v-otp-input", OtpInput);
Vue.use(EnlargeableImage);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/Y hh:mm:ss')
  }
});