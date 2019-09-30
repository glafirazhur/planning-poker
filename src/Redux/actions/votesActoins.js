import axios from 'axios';
import { LOAD_VOTES, ADD_VOTE, UPDATE_VOTE } from '../actionTypes';

const loadVotesAction = (data) => ({ type: LOAD_VOTES, payload: data });

export const loadVotesThunk = () => (dispatch) => {
  fetch('http://localhost:5000/votes')
    .then((response) => response.json())
    .then((data) => {
      dispatch(loadVotesAction(data));
    })
    .catch((error) => console.log(error));
};

const addVoteAction = (voteId, user, poll, voteValue) => ({
  type: ADD_VOTE,
  payload: {
    voteId,
    user,
    poll,
    voteValue,
  },
});

export const addVoteThunk = (user, poll, voteValue) => (dispatch) => {
  axios.post('http://localhost:5000/votes/add', {
    user, poll, voteValue,
  })
    .then(({ data }) => {
      // eslint-disable-next-line no-underscore-dangle
      dispatch(addVoteAction(data._id, data.user, data.poll, data.voteValue));
    })
    .catch((error) => console.log(error));
};

const updateVoteAction = (voteId, voteValue) => ({
  type: UPDATE_VOTE,
  payload: {
    voteId,
    voteValue,
  },
});

export const updateVoteThunk = (voteId, voteValue) => (dispatch) => {
  axios.post('http://localhost:5000/votes/update', { voteId, voteValue })
    .then((response) => response)
    .then(({ data }) => {
      // eslint-disable-next-line no-underscore-dangle
      dispatch(updateVoteAction(data._id, data.voteValue));
    })
    .catch((error) => console.log(error));
};
