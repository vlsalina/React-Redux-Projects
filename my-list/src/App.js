import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ADD } from './actionTypes';
import { connect } from 'react-redux';

function addMessage(message) {
   return { type: ADD, messages: message };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  handleClick(event) {
    this.setState({
      input: event.target.value
    })
  }

  addNewMessage() {
    this.setState({
       input: '',
       messages: this.state.messages.concat(this.state.input)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Type todo item here: </h1>
        <input type="text" value={this.state.input} onChange={this.handleClick} />
        <button type="submit" onClick={this.addNewMessage} >Submit</button>
        <ul>
          {this.state.messages.map((item, idx) => {
             return (
                <li key={idx}>{item}</li>
            )} 
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    addString: (message) => { 
      dispatch(addMessage(message)) 
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
