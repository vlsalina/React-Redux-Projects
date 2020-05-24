import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';

function actionResult(op,it1,it2) {
  return { type: op, item1: it1, item2: it2 }
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: 0,
      item2: 0,
      op: '',
      result: 0
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleChange1(event) {
    this.setState({
      item1: event.target.value
    })
  } 

  handleChange2(event) {
    this.setState({
      item2: event.target.value
    })
  }

  handleOperation(event) {
    this.setState({
      op: event.target.value
    })
  }  

  render() {
    return (
     <div className="App">
        <input type="number" value={this.state.item1} onChange={this.handleChange1} />
        <input type="number" value={this.state.item2} onChange={this.handleChange2} />
        <input type="text" value={this.state.op} onChange={this.handleOperation} />
        <button type="submit" onClick={this.props.appendResult(this.state.op, this.state.item1, this.state.item2)}>Submit</button>
        <ul>
          {this.props.results.map((res,idx) => <li key={idx}>{res.type} {res.answer}</li> )}
        </ul>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
   return { results: state.results }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    appendResult: (op,it1,it2) => {
      dispatch(actionResult(op,it1,it2))
    }
  } 
}; 

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
