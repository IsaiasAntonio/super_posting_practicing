import VueRouter from 'vue-router';
import Index from '../components/index.vue';
import Edit from '../components/edit.vue';
import New from '../components/new.vue';
import Show from '../components/show.vue';

const router = new VueRouter({
  routes: [
    {path: '/', component: Index},
    {path: '/show/:id', component: Show},
    {path: '/edit/:id', component: Edit},
    {path: '/new', component: New}
  ]        
})

export default router;
