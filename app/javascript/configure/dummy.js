import axios from 'axios'

const user = (function(){
  let url = '/v1/users';
  let format = '.json';
  
  function add(user_params){
    return call_user(url + format, 'post', user_params);
  }

  function all(){
    return call_user(url + format, 'get', {});
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

  return{
    add,
    all
  };

}());

export {user};
