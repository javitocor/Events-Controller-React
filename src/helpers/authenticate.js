const authenticate = (user) =>{
  let result = null;
  if (localStorage.getItem('tickets')) {
    const allUsers = JSON.parse(localStorage.getItem('tickets'));
    result = allUsers.filter(obj => {
      return obj.username === user.username && obj.password === user.password
    })
  }
  if (result.length >= 1) {
    return user;
  }
  return false;
}



export default authenticate;