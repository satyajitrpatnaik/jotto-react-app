import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './../../store/guessedWords/guessedWordsActionTypes';

export class UnconnectedInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null
    }
  }

  submitGuessedWord = (event) => {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess"
          onChange={(event) => this.setState({ currentGuess: event.target.value })}
          value={this.state.currentGuess}/>
        <button data-test="submit-button" className="btn btn-primary" type="submit"
          onClick={this.submitGuessedWord}>Submit</button>
      </form>
    )
    return (
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    guessWord: (dispatch) => guessWord()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput);
