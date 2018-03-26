<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Sign Up
        .card-body
          .form-group
            label Email:
            input.form-control(type='email',name='email', placeholder='Enter The email')
            .form-text.text-muted We'll never share your email with anyone else
          .form-group
            label Password:
            input.form-control(type='password', name='password', placeholder='Get some help')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary Submit
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
        email: '',
        password: '',
      },
      errors: {}
    }
  } 
}
</script>
