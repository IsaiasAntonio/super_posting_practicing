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
                .card-text {{post.title}}
                br
          .card
            .card-body
              .card-title Content:
                .card-body
                .card-text {{post.text}}
        .card-footer
          .row
            .col-sm
              router-link.btn.btn-outline-primary(:to='"/edit/"+post.id') Edit
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
       post: [],
       errors: []
     } 
   },
   methods:{
     deletePost(post_id){
       post.destroy(post_id)
         .then(response =>{
           this.getPost()
           this.$router.push({path: '/'});
        })
      },
     getPost(post_id){
       post.read(post_id)
         .then(response =>{
           this.post = response
         })
         .catch(e =>{
           this.errors.push(e)
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
