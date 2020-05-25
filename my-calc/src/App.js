import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './actionTypes';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '0',
      num2: '0',
      result: 0,
      operation: '',
      opPressed: false,
      showFlag: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.temp = this.temp.bind(this);
    this.show = this.show.bind(this);
  }

  handleClick(arg) { 
      if (this.state.showFlag == 2) {
        this.setState({
          showFlag: 0
        })
      }

      if (this.state.opPressed === false) {
          this.setState({ 
            num1: this.state.num1.replace("0", "").concat(arg)
          })
      } else {
          this.setState({
            num2: this.state.num2.replace("0", "").concat(arg)
          })
      }  

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
      num1: '0',
      num2: '0',
      operation: '',
      opPressed: false,
      showFlag: this.state.showFlag + 1 
    })
  }

  temp(op) {
    this.setState({
      operation: op, 
      opPressed: !this.state.opPressed,
      showFlag: this.state.showFlag + 1
    })
  }

  show() {
    let toShow = 0;
    if (this.state.showFlag == 0) {
      toShow = this.state.num1; 
    } else if (this.state.showFlag == 1) {
      toShow = this.state.num2;
    } else if (this.state.showFlag == 2) {
      toShow = this.state.result;
    } else {
      toShow = '0';
    } 

    return <h1>{toShow}</h1>;
     
  }

  // render
  render() {
    return (
     <div className="App">
      <div className="display">
        {this.show()}
      </div>
      
      <div className="top">
      <div className="col">
        <div className="row">
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleClick('0')}>0</button> <br/>
        </div>
      </div>

      <div className="col">
        <button onClick={() => this.temp(ADD)}>+</button> 
        <button onClick={() => this.temp(SUBTRACT)}>-</button> 
        <button onClick={() => this.temp(MULTIPLY)}>*</button> 
        <button onClick={() => this.temp(DIVIDE)}>/</button> 
              
        <button onClick={() => this.handleSubmit()}>=</button>
      </div>
      </div>

     </div>
    );
  }
}

//const mapStateToProps = (state) => {
//};

//const mapDispatchToProps = (dispatch) => {
//
//  return { 
//    }
//   
//}; 

//const Container = connect(mapStateToProps, mapDispatchToProps)(App);

//export default Container;
export default App;
