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
 export default { 
   data: function () {
     return {
       post: [],
       errors: []
     } 
   },
   methods:{
     deletePost(post_id){
       axios.delete('/v1/posts/'+post_id+'.json')
         .then(response =>{
           this.getPost()
           this.$router.push({path: '/'});
        })
      },
     getPost(){
       axios.get('/v1/posts/'+this.$route.params.id+'.json')
         .then(response =>{
           this.post = response.data 
         })
         .catch(e =>{
           this.errors.push(e)
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
