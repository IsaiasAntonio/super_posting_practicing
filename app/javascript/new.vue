<template lang="pug">
.container(id='wrapper')
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Add a new Post
        .card-body
          p(v-if='errors.length')
            ul(v-for='field, key in errors')
              li.badge.badge-pill.badge-danger(v-for='error in field') {{ key }} {{ error }}
          .form-group
            label Title:
            input.form-control(type='text',name='title', placeholder='Enter The title', v-model='post.title')
          .form-group
            label Text:
            textarea.form-control(type='text', name='text', placeholder='Get some help', v-model='post.text')
        .card-footer(id='push')
          .row
            .col-sm
              button.btn.btn-outline-primary(@click.prevent='addPost()') Submit
            .col-sm
            .col-sm
              router-link.btn.btn-outline-success(to='/', id='backButton') Back
</template>

<script>
import axios from 'axios'
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
        axios.post('/v1/posts.json', this.post)
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

<style scoped>
</style> 
