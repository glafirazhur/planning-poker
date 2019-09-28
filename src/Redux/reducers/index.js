import { combineReducers } from 'redux';
import userStoriesReducer from './userStoriesReducer';
// import pollReducer from './pollReducer';
import pollsReducer from './pollsReducer';
import votesReducer from './votesReducer';

export default combineReducers({
  userStories: userStoriesReducer,
  // poll: pollReducer,
  polls: pollsReducer,
  votes: null,
});
