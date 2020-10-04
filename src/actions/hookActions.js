import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get('http://localhost:3030/');
  setSecretWord(response.data);
};

/* export const getSecretWord = (setSecretWord) => {
  axios.get('http://localhost:3030/')
    .then(response => {
      setSecretWord(response.data);
    });
} */

export default {
  getSecretWord
};
