function objectAdder(user) {
  const allUsers = JSON.parse(localStorage.getItem('tickets'));
  allUsers.push(user);
  return allUsers;
}


const addUser = (user) =>{
  if (localStorage.getItem('tickets')) {
    localStorage.setItem('tickets', JSON.stringify(objectAdder(user)));
  } else {
    const add = [];
    add.push(user)
    localStorage.setItem('tickets', JSON.stringify(add));
  }
}



export default addUser;