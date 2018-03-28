<template lang="pug">
.container  
  br
  .col-xs-10.offset-xs-a.col-md-4.offset-md-4
    .card
      .card-header Post
        br
        .card-body
          .card
            .card-body
              .card-tite Title:
                .card-text {{user.first_name}}
                br
          .card
            .card-body
              .card-title Content:
                .card-body
                .card-text {{user.email}}
        .card-footer
          .row
            .col-sm
              router-link.btn.btn-outline-success(to='/') Back to index
</template>

<script>
import axios from 'axios'
import { user } from '../../configure/user'

export default {
  data: function () {
    return{
      first_name: [],
      email: [],
      errors: []
    }
  },
  methods: {
    getUser(user_id){
      user.read(user_id)
        .then(response => {
          this.user = response
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  
  }

}
</script>
