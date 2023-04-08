import {
  EXAMPLE_CHANGE,
} from '../actions/Example';

const initialState = {
  exampleVariable: false,
};

export default (action, state = initialState) => {
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
