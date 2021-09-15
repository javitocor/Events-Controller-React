/* eslint-disable consistent-return */
import {
  LOGIN, LOGOUT, SIGNUP
} from '../constants/constants';
import addUser from '../helpers/addUser';
import authenticate from '../helpers/authenticate';


export const SignUp = (user) => {
  addUser(user);
  return {
    type: SIGNUP,
    payload: user
  };
};

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};


export const authenticateUser = (user) => (dispatch) => {
  if (authenticate(user)){
    dispatch(logIn(user));
  } else {
    return false;
  }
};
export const logOut = () => {
  return {
    type: LOGOUT
  };
};