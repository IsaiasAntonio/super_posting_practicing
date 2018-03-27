<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Sign In
        .card-body
          .form-group
            label Email:
            input.form-control(type='email',name='email', placeholder='Enter The email', v-model='credentials.email')
            .form-text.text-muted We'll never share your email with anyone else
          .form-group
            label Password:
            input.form-control(type='password', name='password', placeholder='Get some help', v-model='credentials.password')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary(@click='getSession') Submit
            .col-sm
              router-link.btn.btn-outline-danger(to='/signup') Sign Up
            .col-sm
              router-link.btn.btn-outline-success(to='/') Back
</template>
<script>
import axios from 'axios'
import { user } from '../../configure/user'

export default{
  data: function(){
    return{
      credentials: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    getSession(){
      user.signIn(this.credentials)
        .then(response => {
          this.$store.commit('user', response)
          this.$router.push({path: '/posts'})
        })
        .catch(e => {
          this.errors = e.response.data
        })
    }
  
  }
}
</script>

<style scoped>
</style>
