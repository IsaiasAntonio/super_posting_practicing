<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Add a new Post
        .card-body
          .form-group
            label Title:
            input.form-control(type='text',name="title", v-model='post.title')
          .form-group
            label Text:
            textarea.form-control(type='text', name="text", v-model='post.text')
        .card-footer
          .row
            .col-sm
              button.btn.btn-outline-primary(@click='addPost()') Submit
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
        text: ''
       },
       errors: []
     } 
   },
    methods:{
      addPost(){
        axios.post('/v1/posts.json', this.post)
          .then(response =>{
            this.$router.push({path: '/'});
          })
          .catch(e =>{
            this.errors.push(e)
          })
      }
    }
 }                                                                           
</script>

<style scoped>
form{
  width: 300px;
  margin: 0 auto;
}
</style> 
