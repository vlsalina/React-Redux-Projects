import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Add</button>
        <button onClick={this.props.onAgeDown}>Sub</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'ADD' }),
    onAgeDown: () => dispatch({ type: 'SUBTRACT' })

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
