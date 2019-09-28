import { CREATE_POLL } from '../actionTypes';
import initialState from '../initialState';

const pollsReducer = (state = initialState.polls, action) => {
  switch (action.type) {
    case CREATE_POLL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pollsReducer;
