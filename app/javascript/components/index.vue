<template lang="pug">                                                       
.container(id='wrapper')
  br
  h1 Listing Posts
  table.table.border.border-dark.rounded
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
import { post } from '../configure/post'

 export default { 
   data: function () {
     return {
       posts: [],
       errors: []
     } 
   },
   methods: {
      deletePost(post_id){
        post.destroy(post_id)
          .then(response =>{
            this.getPosts()
          })
      },
     getPosts(){
       post.all()
         .then(response =>{
           this.posts = response 
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
</style> 
