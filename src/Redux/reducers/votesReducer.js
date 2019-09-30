import { ADD_VOTE, LOAD_VOTES, UPDATE_VOTE } from '../actionTypes';

const votesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_VOTES:
      return [...action.payload];
    case UPDATE_VOTE:
      return state.map((item) => {
        // eslint-disable-next-line no-underscore-dangle
        if (item._id === action.payload.voteId) {
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
