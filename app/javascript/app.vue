<template lang="pug">
  #app
    app-header
    router-view 
    app-footer
</template>

<script>
import VueRouter from 'vue-router';
import Index from './index.vue';
import Edit from './edit.vue';
import New from './new.vue';
import Show from './show.vue';
import Header from './header.vue'
import Footer from './footer.vue'

const router = new VueRouter({
  routes: [
    {path: '/', component: Index},
    {path: '/show/:id', component: Show},
    {path: '/edit/:id', component: Edit},
    {path: '/new', component: New}
  ]        
})

export default{
  router,
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang='scss'>
</style>
