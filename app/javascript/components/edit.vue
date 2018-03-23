<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Edit Post
        .card-body
          .form-group
            label Title:
            input.form-control(type='text', placeholder='New Title', v-model='post.title')
          .form-group
            label Text:
            textarea.form-control(type='text', placeholder='New Text', v-model='post.text')
      .card-footer
        .row
          .col-sm
            button.btn.btn-outline-primary(@click='updatePost()') Update
          .col-sm
            button.btn.btn-outline-danger(@click='deletePost(post.id)') Delete
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
        text: ''
       },
       errors: []
     } 
   },
    methods:{
      getPost(post_id){
        post.read(post_id)
          .then(response =>{
            this.post = response
          })
          .catch(e =>{
            this.errors.push(e)
          })
      },
      deletePost(post_id){
        post.destroy(post_id)
          .then(response =>{
            this.getPost()
            this.$router.push({path: '/'})
          })
      },
      updatePost(){
        post.update(this.$route.params.id, this.post)
          .then(response =>{
            this.$router.push({path: '/'});
          })
      }
    },
   created(){
    this.getPost(this.$route.params.id)
   }
 }
</script>
<style scoped>
</style>
