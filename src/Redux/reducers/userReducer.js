import { LOAD_USER } from '../actionTypes';
import initialState from '../initialState';

const userReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case LOAD_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
