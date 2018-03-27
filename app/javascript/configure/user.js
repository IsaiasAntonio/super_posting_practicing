import axios from 'axios'

const user = (function(){
  let url = '/v1/users';
  let format = '.json';
  
  function create(user_params){
    return callUser(url + format, 'post', user_params);
  }

  function all(){
    return callUser(url + format, 'get', {});
  }

  function read(user_id){
    return callUser(getId(user_id), 'get', {});
  }

  function destroy(user_id){
    return callUser(getId(user_id), 'delete', {});
  }

  function update(user_id, user_params){
    return callUser(getId(user_id), 'patch', user_params)
  }

  function signUp(credentials){
    return callUser('/v1/signup', 'post', credentials)
  }

  function signIn(user){
    return callUser('/v1/signin', 'post', user)
  }

  function callUser(url, method, data){
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

  function getId(user_id = null){
    let id = url + '/' + user_id + format;
    return id
  }

  return{
    create,
    all,
    read,
    destroy,
    update,
    signUp,
    signIn
  };

}());

export {user};
