<template lang="pug">
  #app
    app-header
    router-view.content-app
    app-footer
</template>

<script>
import router from './configure/router';
import Header from './components/partials/header.vue'
import Footer from './components/partials/footer.vue'

export default{
  router,
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang='scss'>
.content-app{
  margin-bottom: 120px
}
</style>
