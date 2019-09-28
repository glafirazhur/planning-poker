import { LOAD_POLL } from '../actionTypes';

const pollReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POLL: {
      const poll = action.payload.polls.filter(
        (pollItem) => pollItem.userStory === action.payload.userStoryId,
      );
      if (poll.length) return poll[0];
      return {};
    }
    default:
      return state;
  }
};

export default pollReducer;
