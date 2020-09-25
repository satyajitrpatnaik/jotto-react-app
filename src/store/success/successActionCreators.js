import { SET_SUCCESS } from "./successActionTypes";

export const setSuccess = (flag) => {
  return {
    type: SET_SUCCESS,
    flag: flag
  }
};