import { LOAD_USER_STORIES } from '../actionTypes';
import initialState from '../initialState';

const userStoriesReducer = (state = initialState.userStories, action) => {
  if (action.type === LOAD_USER_STORIES) return [...state];
  return state;
};

export default userStoriesReducer;
