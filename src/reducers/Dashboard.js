import {
  DASHBOARD_CHANGE,
  } from '../actions/Dashboard';
  
  const initialState = {
    dashboardVariable: 'Not clicked',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case DASHBOARD_CHANGE:
        return {
          ...state,
          dashboardVariable: action.params,
        };
      default:
        return state;
    }
  };