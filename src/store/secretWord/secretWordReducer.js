import { SET_SECRET_WORD } from './secretWordActionTypes';

const secretWordReducer = (state = null, action) => {
  switch(action.type) {
    case SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
