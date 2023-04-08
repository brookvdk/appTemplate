import {
  DASHBOARD_CHANGE,
} from '../actions/Dashboard';

const initialState = {
  dashboardVariable: 'Not clicked',
};

export default (action, state = initialState) => {
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
