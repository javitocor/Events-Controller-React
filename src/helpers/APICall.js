/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { URL } from '../constants/constants';
import {
  getAllItems, getAllItemsPending, getAllItemsError,
} from '../actions/items';

const apiCall = () => async dispatch => {
  const Url = URL;
  
  try {
    dispatch(getAllItemsPending());
    
    const response = await fetch(Url); 
      
    const data = await response.json();
    
    dispatch(getAllItems(data));

    return data;
  } catch (error) {

    dispatch(getAllItemsError(error));

    console.log(error);
  }
};

export default apiCall;