import axios from 'axios'

const post = (function(){
  let url = '/v1/posts';
  let format = '.json';

  function update(post_id, post_params){
    return callPost(getId(post_id), 'patch', post_params);
  }

  function add(post_params){
    return callPost(url + format, 'post', post_params);
  }

  function read(post_id){
    return callPost(getId(post_id), 'get', {});
  }

  function destroy(post_id){
   return callPost(getId(post_id), 'delete', {});
  }

  function all(){
    return callPost(url + format, 'get', {});
  }

  function findByUser(user_id){
    return callPost(url + format, 'get', {});
  }

  function callPost(url, method, data){
    return new Promise((resolve, reject) => {
      axios({url, method, data})
      .then(response => {
        resolve(response.data);
      })
      .catch(e => {
        reject(e.response.data);
      });
    });
  }

  function getId(post_id = null){
    let id = url + '/' + post_id + format;
    return id;
  }

 return {
  read,
  update,
  destroy,
  add,
  all
 };

}());

export {post};
