import {
  initialStateAuth, LOGIN, LOGOUT, SIGNUP
} from '../constants/constants';



const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, loggedIn: false, user: null };
    default:
      return state;
  }
};

export default authReducer;