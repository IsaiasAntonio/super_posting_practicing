import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import App from '../app.vue'

Vue.use(Vuex);
Vue.use(BootstrapVue);

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'));
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    components: { App }
  });
});
