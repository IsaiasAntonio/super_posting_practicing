<template lang='pug'>
.navbar.navbar-expand-lg.navbar-light.bg-dark
  .navbar-brand.text-white Super Posting
    .collapse.navbar-collapse
      .navbar-nav
      .nav-item
        router-link.btn.btn-outline-primary(to='/signin/') Log In
      .nav-item
        router-link.btn.btn-outline-primary(to='/signup/') Sign Up
      .nav-item(v-if='log')
        span.font-weight-bold
</template>
<script>
export default{
  computed:{
  }
}
</script>
<style>
</style>
