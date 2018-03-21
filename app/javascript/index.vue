<template lang="pug">                                                       
.container
  br
  h1 Listing Posts
  table.table
    thead
      colgroup(span="2")
      tr.table-dark
        th Id
        th Title
        th Text
        th(colspan="3") Options
    tbody
      tr(v-for="post of posts")
        td {{post.id}}
        td {{post.title}}
        td {{post.text}}
        td 
          router-link.btn.btn-outline-primary(:to='"/show/" + post.id') Show
        td  
          router-link.btn.btn-outline-primary(:to='"/edit/" + post.id') Edit
        td  
          button.btn.btn-outline-danger(@click='deletePost(post.id)') Delete
  router-link.btn.btn-outline-success.btn-lg(to='/new') Add New Post
</template>                                            

 <script>
import axios from 'axios'
 export default { 
   data: function () {
     return {
       posts: [],
       errors: []
     } 
   },
   methods: {
      deletePost(post_id){
        axios.delete('/v1/posts/'+post_id+'.json')
          .then(response =>{
            this.getPosts()
          })
      },
     getPosts(){
       axios.get('/v1/posts.json')
         .then(response =>{
           this.posts = response.data 
         })
         .catch(e =>{
           this.errors.push(e)
         })
     }
   },
   created(){
    this.getPosts()
   }
 }                                                                           
 </script>                                                                   
                                                                             
 <style scoped>                                                              
table{
  text-align: center;
}
 </style> 
