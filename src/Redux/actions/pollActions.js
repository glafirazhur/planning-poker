import { CREATE_POLL, REMOVE_POLL, LOAD_POLL } from '../actionTypes';

export const createPollAction = (userId, userStoryId) => ({
  type: CREATE_POLL,
  payload: { userId, userStoryId },
});

export const loadPollAction = (userStoryId, polls) => ({
  type: LOAD_POLL,
  payload: {
    polls,
    userStoryId,
  },
});

export const removePollAction = (pollId) => ({
  type: REMOVE_POLL,
  payload: pollId,
});
