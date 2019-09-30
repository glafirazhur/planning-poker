import { CREATE_POLL, LOAD_POLLS } from '../actionTypes';
import initialState from '../initialState';

const pollsReducer = (state = initialState.polls, action) => {
  switch (action.type) {
    case LOAD_POLLS:
      return state;
    case CREATE_POLL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pollsReducer;
