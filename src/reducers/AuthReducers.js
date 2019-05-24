import {SIGN_IN,GET_USER} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    uid:''
  };
export default (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state,email:action.payload.email,password:action.payload.password};
    case GET_USER:
      return {...state,uid:action.payload};
  
    default:
      return state;
  }
};


