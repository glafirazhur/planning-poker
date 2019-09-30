import { ADD_VOTE, LOAD_VOTES, UPDATE_VOTE } from '../actionTypes';
import initialState from '../initialState';

const votesReducer = (state = initialState.votes, action) => {
  switch (action.type) {
    case LOAD_VOTES:
      return state;
    case UPDATE_VOTE:
      return state.map((item) => {
        if (item.voteId === action.payload.voteId) {
          return {
            ...item,
            voteValue: action.payload.voteValue,
          };
        }
        return item;
      });
    case ADD_VOTE: {
      return [
        ...state,
        action.payload,
      ];
    }
    default:
      return state;
  }
};

export default votesReducer;
