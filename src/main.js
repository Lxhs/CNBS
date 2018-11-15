import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import 'normalize.css'
import './assets/css/bass.css'
import Icon from 'vue2-svg-icon/Icon.vue';
Vue.component('icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
