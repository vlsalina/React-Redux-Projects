import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0,
      operation: '',
      opPressed: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOperation = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.temp = this.temp.bind(this);
  }

  handleClick(arg) { 
      if (this.state.opPressed === false) {
          this.setState({ 
            num1: this.state.num1.concat(arg)
          })
      } else {
          this.setState({
            num2: this.state.num2.concat(arg)
          })
      }  
  }

  handleOperation(op) {
    this.setState({
      operation: op,
      opPressed: !this.state.opPressed
    })
  }

  handleSubmit() {
    let res = 0;
    switch(this.state.operation) {
      case ADD:
        res =  (parseInt(this.state.num1) + parseInt(this.state.num2));  
        break;
      case SUBTRACT:
        res =  (parseInt(this.state.num1) - parseInt(this.state.num2));
        break;
      case MULTIPLY:
        res =  (parseInt(this.state.num1) * parseInt(this.state.num2)); 
        break;
      case DIVIDE:
        res =  (parseInt(this.state.num1) / parseInt(this.state.num2));
        break;
      default:
    }

    this.setState({
      result: res, 
      num1: '',
      num2: '',
      operation: '',
      opPressed: false
    })
  }

  temp(op) {
    this.setState({
      operation: op, 
      opPressed: !this.state.opPressed
    })
  }

  // render
  render() {
    return (
     <div className="App">
      <h1>{this.state.result}</h1>
      <button onClick={() => this.handleClick('1')}>1</button>
      <button onClick={() => this.handleClick('2')}>2</button>
      <button onClick={() => this.handleClick('3')}>3</button>
      <button onClick={() => this.handleClick('4')}>4</button>
      <button onClick={() => this.handleClick('5')}>5</button>
      <button onClick={() => this.handleClick('6')}>6</button>
      <button onClick={() => this.handleClick('7')}>7</button>
      <button onClick={() => this.handleClick('8')}>8</button>
      <button onClick={() => this.handleClick('9')}>9</button>
      <button onClick={() => this.handleClick('0')}>0</button> <br/>

      <button onClick={() => this.temp(ADD)}>+</button> 
      <button onClick={() => this.temp(SUBTRACT)}>-</button> 
      <button onClick={() => this.temp(MULTIPLY)}>*</button> 
      <button onClick={() => this.temp(DIVIDE)}>/</button> 
            
      <button onClick={() => this.handleSubmit()}>=</button>

     </div>
    );
  }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {

  return { 
    }
   
}; 

//const Container = connect(mapStateToProps, mapDispatchToProps)(App);

//export default Container;
export default App;
