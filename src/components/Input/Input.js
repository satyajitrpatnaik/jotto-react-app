import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  return (
    <div data-test="component-input">

    </div>
  )
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input;

/* 
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
} */