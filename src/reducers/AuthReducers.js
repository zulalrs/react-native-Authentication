import {SIGN_IN} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:''
  };
export default (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state,email:action.payload.email,password:action.payload.password}
  
    default:
      return state;
  }
};


