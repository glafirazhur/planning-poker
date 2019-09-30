import { LOAD_VOTES, ADD_VOTE, UPDATE_VOTE } from '../actionTypes';

export const loadVotesAction = () => ({ type: LOAD_VOTES });

export const addVoteAction = (voteId, user, poll, voteValue) => ({
  type: ADD_VOTE,
  payload: {
    voteId,
    user,
    poll,
    voteValue,
  },
});

export const updateVoteAction = (voteId, voteValue) => ({
  type: UPDATE_VOTE,
  payload: {
    voteId,
    voteValue,
  },
});
