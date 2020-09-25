/**
 * @method getLetterMatchCount This function returns us the letter match count
 * @param {*} guessedWord 
 * @param {*} secretWord 
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}