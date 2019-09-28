import {
  LOAD_USER_STORIES, CREATE_USER_STORY, LOAD_USER_STORY, REMOVE_USER_STORY,
} from '../actionTypes';

export const loadUserStoriesAction = () => ({ type: LOAD_USER_STORIES });
export const loadUserStoryAction = (userStoryId) => ({
  type: LOAD_USER_STORY,
  payload: userStoryId,
});
export const createUserStoryAction = (userStoryName) => ({
  type: CREATE_USER_STORY,
  payload: userStoryName,
});
export const removeUserStoryAction = (userStoryId) => ({
  type: REMOVE_USER_STORY,
  payload: userStoryId,
});
