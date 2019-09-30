import { combineReducers } from 'redux';
import userStoriesReducer from './userStoriesReducer';
import pollsReducer from './pollsReducer';
import votesReducer from './votesReducer';
import userReducer from './userReducer';

export default combineReducers({
  userStories: userStoriesReducer,
  polls: pollsReducer,
  votes: votesReducer,
  currentUser: userReducer,
});
