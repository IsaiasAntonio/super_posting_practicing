<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Add a new Post
        .card-body
          p(v-if='errors.length')
            p
            ul(v-for='field, key in errors')
              li.badge.badge-pill.badge-danger(v-for='error in field') {{ key }} {{ error }}
          .form-group
            label Title:
            input.form-control(type='text',name='title', placeholder='Enter The title', v-model='post.title')
          .form-group
            label Text:
            textarea.form-control(type='text', name='text', placeholder='Get some help', v-model='post.text')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary(@click.prevent='addPost()') Submit
            .col-sm
            .col-sm
              router-link.btn.btn-outline-success(to='/') Back
</template>

<script>
import axios from 'axios'
import { post } from '../configure/post'

 export default { 
   data: function () {
     return {
       post:{
        title: '',
        text: '',
       },
       errors: {}
     } 
   },
    methods:{
      addPost(){
        post.add(this.post)
          .then(response =>{
            this.$router.push({path: '/'});
          })
          .catch(e =>{
            this.errors = e.response.data;
          })
      }
    }
 }
</script>
