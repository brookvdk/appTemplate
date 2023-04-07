import {
  LOGIN_CHANGE,
  } from '../actions/Login';
  
  const initialState = {
    loginVariable: 'Not clicked',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_CHANGE:
        return {
          ...state,
          loginVariable: action.params,
        };
      default:
        return state;
    }
  };