import axios from 'axios'

const post = (function(){
  let url = '/v1/posts';
  let format = '.json';

  function update(post_id, post_params){
    return call_post(get_id(post_id), 'patch', post_params);
  }

  function add(post_params){
    return call_post(url + format, 'post', post_params);
  }

  function read(post_id){
    return call_post(get_id(post_id), 'get', {});
  }

  function destroy(post_id){
   return call_post(get_id(post_id), 'delete', {});
  }

  function all(){
    return call_post(url + format, 'get', {});
  }

  function call_post(url, method, data){
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

  function get_id(post_id = null){
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
