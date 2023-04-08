import {
  EXAMPLE_CHANGE,
} from '../actions/Example';

const initialState = {
  exampleVariable: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_CHANGE:
      return {
        ...state,
        exampleVariable: !state.exampleVariable,
      };
    default:
      return state;
  }
};
