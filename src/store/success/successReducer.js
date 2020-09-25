import { CORRECT_GUESS } from './successActionTypes'; 

const initialState = false;

const successReducer = (state = initialState, action) => {
  switch(action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}

export default successReducer;
