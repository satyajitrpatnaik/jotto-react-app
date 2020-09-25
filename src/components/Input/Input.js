import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess" />
        <button data-test="submit-button" className="btn btn-primary" type="submit">Submit</button>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
