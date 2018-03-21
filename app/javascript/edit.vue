<template lang="pug">
.container
  br
  .col-xs-10.offset-xs-1.col-md-4.offset-md-4
    .card
      .card-header
        h5 Edit Post
          .form-group
            label Title:
            input.form-control(type='text', v-model='post.title')
          .form-group
            label Text:
            input.form-control(type='text', v-model='post.text')
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
      getPost(){
        axios.get('/v1/posts/'+this.$route.params.id+'.json')
          .then(response =>{
            this.post = response.data
          })
          .catch(e =>{
            this.errors.push(e)
          })
      },
      deletePost(post_id){
        axios.delete('/v1/posts/'+post_id+'.json')
          .then(response =>{
            this.getPost()
            this.$router.push({path: '/'})
          })
      },
      updatePost(){
        axios.patch('/v1/posts/'+this.$route.params.id+'.json', this.post)
          .then(response =>{
            this.$router.push({path: '/'});
          })
      }
    },
   created(){
    this.getPost()
   }
 }                                                                           
</script>

<style scoped>
</style>
