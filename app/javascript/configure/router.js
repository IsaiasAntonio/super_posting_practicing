import VueRouter from 'vue-router';
import Index from '../components/index.vue';
import Edit from '../components/edit.vue';
import New from '../components/new.vue';
import Show from '../components/show.vue';
import Signup from '../components/signup.vue';
import Signin from '../components/signin.vue';
import Profile from '../components/profile.vue'

const router = new VueRouter({
  routes: [
    {path: '/', component: Index},
    {path: '/show/:id', component: Show},
    {path: '/edit/:id', component: Edit},
    {path: '/new', component: New},
    {path: '/signup', component: Signup},
    {path: '/signin', component: Signin},
    {path: '/profile', component: Profile}
  ]        
})

export default router;
