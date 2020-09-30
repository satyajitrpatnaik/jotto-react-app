import axios from "axios";
import { SET_SECRET_WORD } from "./secretWordActionTypes";

export const getSecretWord = () => {
  return function(dispatch, getState) {
    return axios.get('http://localhost:3030/')
      .then(response => {
        dispatch({
          type: SET_SECRET_WORD,
          payload: response.data
        })
      })
  }
}