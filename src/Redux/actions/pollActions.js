import { CREATE_POLL, REMOVE_POLL, LOAD_POLLS } from '../actionTypes';

export const createPollAction = (userId, userStoryId) => ({
  type: CREATE_POLL,
  payload: { userId, userStoryId },
});

export const removePollAction = (pollId) => ({
  type: REMOVE_POLL,
  payload: pollId,
});

export const loadPollsAction = () => ({ type: LOAD_POLLS });
