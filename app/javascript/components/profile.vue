<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-a.col-md-4.offset-md-4
    .card
      .card-header Profile
        br
        .card-body
          .card
            .card-body
              .card-title First Name:
                .card-text {{}}
          .card
            .card-body
              .card-title Last Name:
                .card-text {{}}
          .card
            .card-body 
              .card-title Email:
                .card-text {{}}
        .card-footer
          .row
            .col-sm
            .col-sm
            .col-sm
                
</template>

<script>
import axios from 'axios'
import { user } from '../configure/user'

export default{
  data: function() {
    return{
      first_name: [],
      last_name: [],
      email: [],
      errors: []
    }
  },
  methods: {
    getUser(user_id){
      user.read(user_id)
        .then(response =>{
          this.user = response
        })
        .catch(e =>{
          this.errors.push(e)
        })
    } 
  }
}
</script>
