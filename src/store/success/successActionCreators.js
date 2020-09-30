import { CORRECT_GUESS } from "./successActionTypes";

export const setSuccess = (flag) => {
  return {
    type: CORRECT_GUESS,
    flag: flag
  }
};
