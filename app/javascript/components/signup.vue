<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Sign Up
        .card-body
          .form-group
            label First Name:
            input.form-control(type='text', name='first_name', placeholder='Put your first name', v-model='user.first_name')
          .form-group
            label Last Name:
            input.form-control(type='text', name='last_name', placeholder='Put your last name', v-model='user.last_name')
          .form-group
            label Email:
            input.form-control(type='email',name='email', placeholder='Enter The email', v-model='user.email')
            .form-text.text-muted We'll never share your email with anyone else
          .form-group
            label Password:
            input.form-control(type='password', name='password', placeholder='Get some help', v-model='user.password')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary(@click='createUser()') Submit
            .col-sm
            .col-sm
              router-link.btn.btn-outline-success(to='/', id='backButton') Back
</template>
<script>
import axios from 'axios'
import { user } from '../configure/user'

export default{
  data: function (){
    return {
      user:{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
      errors: {}
    }
  },
  methods:{
    createUser(){
      user.add(this.user)
        .then(response =>{
          this.$router.push({path: '/'});
        })
        .catch(e =>{
          this.errors = e.response.data
        })
    }
  }
}
</script>
