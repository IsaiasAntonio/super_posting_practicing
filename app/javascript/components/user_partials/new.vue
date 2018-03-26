<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Sign Up
        .card-body
          p(v-if='errors.length')
            p
            ul(v-for='field, key in errors')
              li.badge.badge-pill.badge-danger(v-for='error in field') {{ key }} {{ error }}
          .form-group
            label Title:
            input.form-control(type='email',name='email', placeholder='Enter The email', v-model='user.email')
          .form-group
            label Text:
            input.form-control(type='password', name='password', placeholder='Get some help', v-model='user.email')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary(@click.prevent='createUser()') Submit
            .col-sm
            .col-sm
              router-link.btn.btn-outline-success(to='/', id='backButton') Back
</template>
<script>
import axios from 'axios'

</script>

<style scoped>
</style>
