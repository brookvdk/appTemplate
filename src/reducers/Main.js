import {
  MAIN_CHANGE,
} from '../actions/Main';

const initialState = {
  mainVariable: 'Not clicked',
};

export default (action, state = initialState) => {
  switch (action.type) {
    case MAIN_CHANGE:
      return {
        ...state,
        mainVariable: action.params,
      };
    default:
      return state;
  }
};
