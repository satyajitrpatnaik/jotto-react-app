import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import { getSecretWord } from './store/secretWord/secretWordActionCreators';

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    secretWord: state.secretWord,
    guessedWords: state.guessedWords,
    success: state.success
  }
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
