import axios from 'axios'

const user = (function(){
  let url = '/v1/users';
  let format = '.json';
  
  function create(user_params){
    return call_user(url + format, 'post', user_params);
  }

  function all(){
    return call_user(url + format, 'get', {});
  }

  function read(user_id){
    return call_user(get_id(user_id), 'get', {});
  }

  function delete(user_id){
    return call_user(get_id(user_id))
  }

  function call_user(url, method, data){
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

  function get_id(user_id = null){
    let id = url + '/' + user_id + format;
    return id
  }

  return{
    add,
    all,
    read,
    read
  };

}());

export {user};
