import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from '../app.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(App)
  })

})
