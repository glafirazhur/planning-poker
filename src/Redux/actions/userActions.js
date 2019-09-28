import {
  LOAD_USER, CREATE_USER, REMOVE_USER, LOAD_USERS,
} from '../actionTypes';

export const createUserAction = (userName) => ({
  type: CREATE_USER,
  payload: userName,
});

export const loadUserAction = (userId) => ({
  type: LOAD_USER,
  payload: userId,
});

export const removeUserAction = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export const loadUsersAction = () => ({ type: LOAD_USERS });
